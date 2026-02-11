/* ===================================
   독도 3D 뷰어 — Three.js + ScrollTrigger
   Immersive full-screen 360° rotation
   with overlay fact cards & camera shifts
   =================================== */

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

(function () {
  'use strict';

  var section = document.querySelector('.geo-section');
  var container = document.getElementById('geo-3d-container');
  var canvas = document.getElementById('geo-3d-canvas');
  if (!section || !container || !canvas) return;

  // Access GSAP globals (loaded before this module)
  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;

  // Overlay elements
  var overlayTitle = document.querySelector('.geo__overlay-title');
  var geoCards = document.querySelectorAll('[data-geo-card]');
  var NUM_CARDS = geoCards.length; // 8
  var isMobile = window.innerWidth <= 768;

  // --- Renderer ---
  var renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: false
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.8;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  // --- Scene ---
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0x6ab4d6);

  // Fog for depth (light sky-blue tint)
  scene.fog = new THREE.FogExp2(0x6ab4d6, 0.0008);

  // --- Camera ---
  var camera = new THREE.PerspectiveCamera(45, 1, 1, 5000);

  // --- Lighting (bright daylight) ---
  var hemiLight = new THREE.HemisphereLight(0xd0e8ff, 0x8fbc8f, 1.0);
  scene.add(hemiLight);

  var sunLight = new THREE.DirectionalLight(0xfffaf0, 2.5);
  sunLight.position.set(200, 400, 150);
  sunLight.castShadow = false;
  scene.add(sunLight);

  var fillLight = new THREE.DirectionalLight(0xc0d8f0, 1.0);
  fillLight.position.set(-150, 200, -100);
  scene.add(fillLight);

  var ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  // --- Ocean plane ---
  var oceanGeo = new THREE.PlaneGeometry(80000, 80000);
  var oceanMat = new THREE.MeshStandardMaterial({
    color: 0x062d52,
    roughness: 0.15,
    metalness: 0.1,
    transparent: false
  });
  var ocean = new THREE.Mesh(oceanGeo, oceanMat);
  ocean.rotation.x = -Math.PI / 2;
  ocean.position.y = -3;
  oceanMat.polygonOffset = true;
  oceanMat.polygonOffsetFactor = 1;
  oceanMat.polygonOffsetUnits = 1;
  scene.add(ocean);

  // --- Model container (for rotation) ---
  var modelGroup = new THREE.Group();
  scene.add(modelGroup);

  // --- State ---
  var modelLoaded = false;
  var needsRender = true;
  var scrollRotation = 0;
  var currentProgress = 0;
  var camDistance = 0;
  var modelSize = null;

  // Camera elevation presets per card (documentary feel)
  var CARD_CAMERAS = [
    { elevDeg: 15, lookY: 0.20 },  // Card 1: standard
    { elevDeg: 20, lookY: 0.15 },  // Card 2: slightly higher
    { elevDeg: 12, lookY: 0.25 },  // Card 3: lower, looking up
    { elevDeg: 25, lookY: 0.10 },  // Card 4: high overview
    { elevDeg: 10, lookY: 0.30 },  // Card 5: low dramatic
    { elevDeg: 18, lookY: 0.20 },  // Card 6: medium
    { elevDeg: 22, lookY: 0.15 },  // Card 7: high
    { elevDeg: 15, lookY: 0.20 }   // Card 8: return to standard
  ];

  // --- Load GLTF/GLB model ---
  var loader = new GLTFLoader();

  var dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('https://unpkg.com/three@0.160.0/examples/jsm/libs/draco/');
  loader.setDRACOLoader(dracoLoader);

  loader.load(
    'assets/models/dokdo.glb',
    function (gltf) {
      var model = gltf.scene;
      modelGroup.add(model);

      // Auto-fit
      var box = new THREE.Box3().setFromObject(model);
      var center = box.getCenter(new THREE.Vector3());
      var size = box.getSize(new THREE.Vector3());

      model.position.sub(center);
      model.position.y -= box.min.y - center.y;

      var maxDim = Math.max(size.x, size.y, size.z);
      camDistance = maxDim * 0.7;
      modelSize = size;

      var camElevation = 15 * (Math.PI / 180);
      camera.position.set(
        camDistance * Math.cos(camElevation),
        camDistance * Math.sin(camElevation),
        0
      );
      camera.lookAt(0, size.y * 0.2, 0);

      sunLight.position.set(maxDim * 2, maxDim * 3, maxDim * 2);
      sunLight.target.position.set(0, 0, 0);
      scene.add(sunLight.target);

      scene.fog = new THREE.FogExp2(0x6ab4d6, 0.4 / camDistance);

      modelLoaded = true;
      needsRender = true;
      renderFrame();

      console.log('Dokdo 3D model loaded:', size.x.toFixed(1), '×', size.y.toFixed(1), '×', size.z.toFixed(1));
    },
    undefined,
    function (error) {
      console.warn('Dokdo 3D model not found or failed to load:', error.message || error);
    }
  );

  // --- Resize handling ---
  function updateSize() {
    var rect = container.getBoundingClientRect();
    var w = rect.width;
    var h = rect.height;
    if (w === 0 || h === 0) return;

    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    isMobile = window.innerWidth <= 768;
    needsRender = true;
  }

  var resizeObserver = new ResizeObserver(function () {
    updateSize();
    renderFrame();
  });
  resizeObserver.observe(container);
  updateSize();

  // --- Smoothstep helper ---
  function smoothstep(t) {
    return t * t * (3 - 2 * t);
  }

  // --- Render (on-demand) ---
  function renderFrame() {
    if (!needsRender && !modelLoaded) return;

    // Apply scroll-driven rotation
    modelGroup.rotation.y = scrollRotation;

    // Interpolate camera elevation based on current card
    if (modelLoaded && modelSize && camDistance > 0 && NUM_CARDS > 0) {
      var cardIdx = Math.min(Math.floor(currentProgress * NUM_CARDS), NUM_CARDS - 1);
      var nextIdx = Math.min(cardIdx + 1, NUM_CARDS - 1);
      var segLocal = (currentProgress * NUM_CARDS) - cardIdx;
      segLocal = Math.max(0, Math.min(1, segLocal));
      segLocal = smoothstep(segLocal);

      var targetElev = THREE.MathUtils.lerp(
        CARD_CAMERAS[cardIdx].elevDeg,
        CARD_CAMERAS[nextIdx].elevDeg,
        segLocal
      ) * (Math.PI / 180);

      var targetLookY = THREE.MathUtils.lerp(
        CARD_CAMERAS[cardIdx].lookY,
        CARD_CAMERAS[nextIdx].lookY,
        segLocal
      ) * modelSize.y;

      camera.position.set(
        camDistance * Math.cos(targetElev),
        camDistance * Math.sin(targetElev),
        0
      );
      camera.lookAt(0, targetLookY, 0);
    }

    renderer.render(scene, camera);
    needsRender = false;
  }

  // Initial render
  renderFrame();

  // --- Card animations (overlay, alternating sides) ---
  function updateCards(progress) {
    if (NUM_CARDS === 0) return;

    // Fade section title out as first card enters
    if (overlayTitle) {
      var titleFade = Math.max(0, 1 - progress * NUM_CARDS * 2);
      overlayTitle.style.opacity = titleFade;
    }

    for (var i = 0; i < NUM_CARDS; i++) {
      var segStart = i / NUM_CARDS;
      var segEnd = (i + 1) / NUM_CARDS;
      var segLen = segEnd - segStart;

      var fadeInEnd = segStart + segLen * 0.15;
      var fadeOutStart = segStart + segLen * 0.75;

      var opacity = 0;
      var yOffset = 20;
      var xOffset = 30;

      if (progress >= segStart && progress < fadeInEnd) {
        var t = (progress - segStart) / (fadeInEnd - segStart);
        opacity = t;
        yOffset = 20 * (1 - t);
        xOffset = 30 * (1 - t);
      } else if (progress >= fadeInEnd && progress < fadeOutStart) {
        opacity = 1;
        yOffset = 0;
        xOffset = 0;
      } else if (progress >= fadeOutStart && progress < segEnd) {
        var t = (progress - fadeOutStart) / (segEnd - fadeOutStart);
        opacity = 1 - t;
        yOffset = -20 * t;
        xOffset = -15 * t;
      }

      if (isMobile) {
        // Mobile: cards centered at bottom, only vertical movement
        geoCards[i].style.opacity = opacity;
        geoCards[i].style.transform = 'translateX(-50%) translateY(' + yOffset + 'px)';
      } else {
        // Desktop: cards on alternating sides with horizontal slide
        var isRight = geoCards[i].getAttribute('data-geo-position') === 'right';
        var signedX = isRight ? xOffset : -xOffset;
        geoCards[i].style.opacity = opacity;
        geoCards[i].style.transform = 'translateY(calc(-50% + ' + yOffset + 'px)) translateX(' + signedX + 'px)';
      }
    }
  }

  // --- ScrollTrigger integration (sticky wrapper — avoids broken pin-spacers) ---
  if (gsap && ScrollTrigger) {
    var wrapper = document.createElement('div');
    wrapper.className = 'geo-sticky-wrapper';
    wrapper.style.height = '700vh'; // 100vh section + 600vh scroll distance
    wrapper.style.position = 'relative';
    section.parentNode.insertBefore(wrapper, section);
    wrapper.appendChild(section);

    section.style.position = 'sticky';
    section.style.top = '0';

    ScrollTrigger.create({
      trigger: wrapper,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.5,
      onUpdate: function (self) {
        var p = self.progress;
        currentProgress = p;

        // 3D rotation: full 360° over entire scroll
        scrollRotation = p * Math.PI * 2;
        needsRender = true;
        renderFrame();

        // Card animations
        updateCards(p);
      }
    });
  }

})();
