/* ===================================
   독도 3D 뷰어 — Three.js + ScrollTrigger
   Scroll-driven 360° rotation of Dokdo model
   =================================== */

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

(function () {
  'use strict';

  var container = document.getElementById('geo-3d-container');
  var canvas = document.getElementById('geo-3d-canvas');
  if (!container || !canvas) return;

  // Access GSAP globals (loaded before this module)
  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;

  // --- Renderer ---
  var renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: false
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  // --- Scene ---
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0c1d2e);

  // Fog for depth
  scene.fog = new THREE.FogExp2(0x0c1d2e, 0.0015);

  // --- Camera ---
  var camera = new THREE.PerspectiveCamera(45, 1, 0.1, 5000);

  // --- Lighting ---
  // Hemisphere light (sky blue ↔ ocean dark)
  var hemiLight = new THREE.HemisphereLight(0x87ceeb, 0x0c1d2e, 0.6);
  scene.add(hemiLight);

  // Directional light (sun from northeast)
  var sunLight = new THREE.DirectionalLight(0xfff4e0, 1.5);
  sunLight.position.set(200, 300, 200);
  sunLight.castShadow = false;
  scene.add(sunLight);

  // Ambient fill
  var ambientLight = new THREE.AmbientLight(0x404060, 0.4);
  scene.add(ambientLight);

  // --- Ocean plane ---
  var oceanGeo = new THREE.PlaneGeometry(4000, 4000);
  var oceanMat = new THREE.MeshStandardMaterial({
    color: 0x0f3d5c,
    roughness: 0.3,
    metalness: 0.1,
    transparent: true,
    opacity: 0.85
  });
  var ocean = new THREE.Mesh(oceanGeo, oceanMat);
  ocean.rotation.x = -Math.PI / 2;
  ocean.position.y = -0.5;
  scene.add(ocean);

  // --- Model container (for rotation) ---
  var modelGroup = new THREE.Group();
  scene.add(modelGroup);

  // --- State ---
  var modelLoaded = false;
  var needsRender = true;
  var scrollRotation = 0; // 0 to 2π

  // --- Load GLTF/GLB model ---
  var loader = new GLTFLoader();

  // Optional Draco decoder
  var dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('https://unpkg.com/three@0.160.0/examples/jsm/libs/draco/');
  loader.setDRACOLoader(dracoLoader);

  loader.load(
    'assets/models/dokdo.glb',
    function (gltf) {
      var model = gltf.scene;
      modelGroup.add(model);

      // Auto-fit: compute bounding box and center/scale
      var box = new THREE.Box3().setFromObject(model);
      var center = box.getCenter(new THREE.Vector3());
      var size = box.getSize(new THREE.Vector3());

      // Center the model
      model.position.sub(center);
      // Lift slightly above ocean
      model.position.y -= box.min.y - center.y;

      // Camera distance based on model size
      var maxDim = Math.max(size.x, size.y, size.z);
      var camDistance = maxDim * 2.0;
      var camElevation = 35 * (Math.PI / 180); // 35° above horizon

      camera.position.set(
        camDistance * Math.cos(camElevation),
        camDistance * Math.sin(camElevation),
        0
      );
      camera.lookAt(0, size.y * 0.2, 0);

      // Update sun position relative to model
      sunLight.position.set(maxDim * 2, maxDim * 3, maxDim * 2);
      sunLight.target.position.set(0, 0, 0);
      scene.add(sunLight.target);

      // Update fog density based on model scale
      scene.fog = new THREE.FogExp2(0x0c1d2e, 0.8 / camDistance);

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
    needsRender = true;
  }

  var resizeObserver = new ResizeObserver(function () {
    updateSize();
    renderFrame();
  });
  resizeObserver.observe(container);
  updateSize();

  // --- Render (on-demand, not rAF loop) ---
  function renderFrame() {
    if (!needsRender && !modelLoaded) return;

    // Apply scroll-driven rotation
    modelGroup.rotation.y = scrollRotation;

    renderer.render(scene, camera);
    needsRender = false;
  }

  // Initial render (shows ocean + background before model loads)
  renderFrame();

  // --- ScrollTrigger integration ---
  if (gsap && ScrollTrigger) {
    ScrollTrigger.create({
      trigger: container,
      start: 'top 60%',
      end: 'top -40%',
      scrub: 0.5,
      onUpdate: function (self) {
        scrollRotation = self.progress * Math.PI * 2;
        needsRender = true;
        renderFrame();
      }
    });
  }

})();
