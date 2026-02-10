/* ===================================
   독도 이야기 - Main Script
   GSAP Animations + Navigation
   =================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Navigation (always active) ---
  initNavBackground();

  // --- Hero scroll deblur (always active — user-controlled) ---
  initHeroAnimations(prefersReducedMotion);

  if (prefersReducedMotion) {
    // Make all content visible without entrance animations
    gsap.set('.fade-up, .claim-card, .timeline__event, .timeline__dot, .law__principle, .fact-card', {
      opacity: 1, y: 0, x: 0, scale: 1
    });
    return;
  }

  // --- Default animation settings ---
  gsap.defaults({
    ease: 'power2.out',
    duration: 1
  });

  // --- Section Animations ---
  initGeoAnimations();
  initTimelineAnimations();
  initClaimAnimations();
  initLawAnimations();
  initConclusionAnimations();

  // --- Batch fade-up elements ---
  initFadeUpBatch();
});

/* ========================================
   Navigation
   ======================================== */

function initNavBackground() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  ScrollTrigger.create({
    trigger: '#hero',
    start: 'bottom top+=100',
    onEnter: () => nav.classList.add('nav--scrolled'),
    onLeaveBack: () => nav.classList.remove('nav--scrolled')
  });
}

/* ========================================
   Hero Section Animations
   ======================================== */

function initHeroAnimations(reducedMotion) {
  var mapImg = document.querySelector('.hero__map-img img');
  var mapContainer = document.querySelector('.hero__map-img');
  var heroBg = document.querySelector('.hero__bg');
  var heroParticles = document.querySelector('.hero__particles');
  var satellite = document.getElementById('hero-satellite');
  var video = document.getElementById('hero-satellite-video');

  // Prepare video for scroll-scrubbing: pause it and wait for metadata
  var videoReady = false;
  var videoDuration = 5; // fallback duration (seconds)
  if (video) {
    video.pause();
    var onReady = function () {
      videoReady = true;
      if (video.duration && isFinite(video.duration)) {
        videoDuration = video.duration;
      }
      // Set to first frame
      video.currentTime = 0;
    };
    if (video.readyState >= 1) {
      onReady();
    } else {
      video.addEventListener('loadedmetadata', onReady);
    }
  }

  // Distance overlay elements
  var distGroup = document.getElementById('hero-dist');
  var distLine = document.getElementById('hero-dist-line');
  var distUlleung = document.getElementById('hero-dist-ulleung');
  var distLabel = document.getElementById('hero-dist-label');
  var distDokdoName = document.getElementById('hero-dist-dokdo-name');
  var distUlleungName = document.getElementById('hero-dist-ulleung-name');

  var distOkiGroup = document.getElementById('hero-dist-oki');
  var distOkiLine = document.getElementById('hero-dist-oki-line');
  var distOkiDot = document.getElementById('hero-dist-oki-dot');
  var distOkiLabel = document.getElementById('hero-dist-oki-label');
  var distOkiName = document.getElementById('hero-dist-oki-name');

  // Web Mercator constants for distance overlay
  var DOKDO_LNG = 131.8669, DOKDO_LAT = 37.2408;
  var ULLEUNG_LNG = 130.9057, ULLEUNG_LAT = 37.4844;
  var OKI_LNG = 133.10, OKI_LAT = 36.22;
  var ZOOM_VIDEO_START = 14, ZOOM_VIDEO_RANGE = 6;

  function mercatorY(lat) {
    var rad = lat * Math.PI / 180;
    return (1 - Math.log(Math.tan(rad) + 1 / Math.cos(rad)) / Math.PI) / 2;
  }

  // All fixed hero layers to show/hide together
  var fixedLayers = [mapContainer, heroBg, heroParticles, satellite].filter(Boolean);

  if (mapImg && mapContainer) {
    ScrollTrigger.create({
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      onUpdate: function (self) {
        var p = self.progress;

        // Hero text: fades out in first 15%
        var textP = Math.min(p / 0.15, 1);
        var heroContent = document.querySelector('.hero__content');
        var scrollInd = document.querySelector('.scroll-indicator');
        if (heroContent) {
          heroContent.style.opacity = String(1 - textP);
          heroContent.style.transform = 'translateY(' + (-50 * textP) + 'px)';
        }
        if (scrollInd) {
          scrollInd.style.opacity = String(1 - textP);
        }

        // Phase 1 (0-30%): Old map deblurs
        var blurP = Math.min(p / 0.3, 1);
        var blur = 20 * (1 - blurP);
        var oldOpacity = 0.3 + 0.5 * blurP;
        var scale = 1.08 - 0.08 * blurP;

        // Phase 2 (30-55%): Crossfade — old map fades out, satellite fades in
        if (p > 0.3) {
          var fadeP = Math.min((p - 0.3) / 0.25, 1);
          oldOpacity = 0.8 * (1 - fadeP);
          // Fade grid/vignette overlays out with the old map
          if (heroBg) heroBg.style.opacity = String(0.6 * (1 - fadeP));
          if (heroParticles) heroParticles.style.opacity = String(1 - fadeP);
          if (satellite) satellite.style.opacity = String(fadeP);
        } else {
          if (heroBg) heroBg.style.opacity = '0.6';
          if (heroParticles) heroParticles.style.opacity = '1';
          if (satellite) satellite.style.opacity = '0';
        }

        // Phase 3 (55-85%): Satellite zoom out via video scrub
        // Phase 4 (85-100%): Hold at zoom 7 before next section
        if (p > 0.55 && video && videoReady) {
          var zoomP = Math.min((p - 0.55) / 0.30, 1);
          video.currentTime = zoomP * videoDuration;

          var zEff = ZOOM_VIDEO_START - ZOOM_VIDEO_RANGE * zoomP;
          var worldSize = 256 * Math.pow(2, zEff);
          var margin = 100;

          // Distance overlay: Dokdo ↔ Ulleungdo
          if (distGroup) {
            var dx = (ULLEUNG_LNG - DOKDO_LNG) / 360 * worldSize;
            var dy = (mercatorY(ULLEUNG_LAT) - mercatorY(DOKDO_LAT)) * worldSize;
            var ux = 960 + dx;
            var uy = 540 + dy;

            var lineLen = Math.sqrt(dx * dx + dy * dy);
            var insideX = Math.min(ux - margin, 1920 - margin - ux);
            var insideY = Math.min(uy - margin, 1080 - margin - uy);
            var fadeIn = Math.max(0, Math.min(Math.min(insideX, insideY) / 80, 1));
            var fadeOut = lineLen < 60 ? lineLen / 60 : 1;
            var distOpacity = fadeIn * fadeOut;
            distGroup.setAttribute('opacity', distOpacity.toFixed(3));

            if (distOpacity > 0.01) {
              distLine.setAttribute('x2', ux.toFixed(1));
              distLine.setAttribute('y2', uy.toFixed(1));
              distUlleung.setAttribute('cx', ux.toFixed(1));
              distUlleung.setAttribute('cy', uy.toFixed(1));

              var mx = (960 + ux) / 2;
              var my = (540 + uy) / 2;
              distLabel.setAttribute('transform',
                'translate(' + mx.toFixed(1) + ',' + my.toFixed(1) + ')');

              distDokdoName.setAttribute('x', '960');
              distDokdoName.setAttribute('y', '560');
              distUlleungName.setAttribute('x', ux.toFixed(1));
              distUlleungName.setAttribute('y', (uy + 20).toFixed(1));
            }
          }

          // Distance overlay: Dokdo ↔ Oki Islands
          if (distOkiGroup) {
            var odx = (OKI_LNG - DOKDO_LNG) / 360 * worldSize;
            var ody = (mercatorY(OKI_LAT) - mercatorY(DOKDO_LAT)) * worldSize;
            var ox = 960 + odx;
            var oy = 540 + ody;

            var okiLineLen = Math.sqrt(odx * odx + ody * ody);
            var okiInsideX = Math.min(ox - margin, 1920 - margin - ox);
            var okiInsideY = Math.min(oy - margin, 1080 - margin - oy);
            var okiFadeIn = Math.max(0, Math.min(Math.min(okiInsideX, okiInsideY) / 80, 1));
            var okiFadeOut = okiLineLen < 60 ? okiLineLen / 60 : 1;
            var okiOpacity = okiFadeIn * okiFadeOut;
            distOkiGroup.setAttribute('opacity', okiOpacity.toFixed(3));

            if (okiOpacity > 0.01) {
              distOkiLine.setAttribute('x2', ox.toFixed(1));
              distOkiLine.setAttribute('y2', oy.toFixed(1));
              distOkiDot.setAttribute('cx', ox.toFixed(1));
              distOkiDot.setAttribute('cy', oy.toFixed(1));

              var omx = (960 + ox) / 2;
              var omy = (540 + oy) / 2;
              distOkiLabel.setAttribute('transform',
                'translate(' + omx.toFixed(1) + ',' + omy.toFixed(1) + ')');

              distOkiName.setAttribute('x', ox.toFixed(1));
              distOkiName.setAttribute('y', (oy + 20).toFixed(1));
            }
          }
        } else {
          if (distGroup) distGroup.setAttribute('opacity', '0');
          if (distOkiGroup) distOkiGroup.setAttribute('opacity', '0');
        }

        mapImg.style.filter = 'blur(' + blur + 'px)';
        mapImg.style.opacity = String(oldOpacity);
        mapImg.style.transform = 'scale(' + scale + ')';
      },
      onLeave: function () {
        fixedLayers.forEach(function (el) { el.style.visibility = 'hidden'; });
      },
      onEnterBack: function () {
        fixedLayers.forEach(function (el) { el.style.visibility = 'visible'; });
      }
    });
  }

  // Skip entrance animations if reduced motion
  if (reducedMotion) return;

  // Scroll indicator pulse
  gsap.to('.scroll-indicator', {
    y: 10,
    opacity: 0.4,
    repeat: -1,
    yoyo: true,
    duration: 1.5,
    ease: 'power1.inOut'
  });

  // Initial hero entrance animation
  var heroTl = gsap.timeline({ delay: 0.3 });

  heroTl
    .from('.hero__coords', {
      y: 20,
      opacity: 0,
      duration: 0.8
    })
    .from('.hero__title', {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.4')
    .from('.hero__subtitle', {
      y: 30,
      opacity: 0,
      duration: 0.8
    }, '-=0.5')
    .from('.scroll-indicator', {
      opacity: 0,
      duration: 0.6
    }, '-=0.2');
}

/* ========================================
   Geography Section Animations
   ======================================== */

function initGeoAnimations() {
  var section = document.querySelector('.geo-section');
  if (!section) return;

  // 3D viewer is handled by dokdo3d.js (Three.js module)

  // Fact cards fade-in
  gsap.set('.fact-card', { y: 40, opacity: 0 });

  ScrollTrigger.batch('.fact-card', {
    onEnter: function (elements) {
      gsap.to(elements, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 });
    },
    start: 'top 85%',
    once: true
  });
}

/* ========================================
   Timeline Section Animations
   ======================================== */

function initTimelineAnimations() {
  // Timeline line draws with scroll
  gsap.fromTo('.timeline__line',
    { scaleY: 0 },
    {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '.timeline-section',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1
      }
    }
  );

  // We use a MutationObserver to animate events after they're rendered
  observeAndAnimateTimeline();
}

function observeAndAnimateTimeline() {
  const container = document.getElementById('timeline-events');
  if (!container) return;

  // If events already exist, animate them
  if (container.children.length > 0) {
    animateTimelineEvents();
  }

  // Watch for changes (language switch re-renders)
  const observer = new MutationObserver(() => {
    animateTimelineEvents();
  });

  observer.observe(container, { childList: true });
}

function animateTimelineEvents() {
  const events = document.querySelectorAll('.timeline__event');
  const dots = document.querySelectorAll('.timeline__dot');

  events.forEach((event, i) => {
    const isLeft = event.classList.contains('timeline__event--left');
    const direction = isLeft ? 80 : -80;

    // Kill any existing ScrollTriggers for this element
    ScrollTrigger.getAll().forEach(st => {
      if (st.trigger === event) st.kill();
    });

    gsap.fromTo(event, {
      x: direction,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: event,
        start: 'top 85%',
        once: true
      }
    });
  });

  dots.forEach(dot => {
    gsap.fromTo(dot, {
      scale: 0
    }, {
      scale: 1,
      duration: 0.5,
      ease: 'back.out(3)',
      scrollTrigger: {
        trigger: dot,
        start: 'top 85%',
        once: true
      }
    });
  });
}

/* ========================================
   Claims Section Animations
   ======================================== */

function initClaimAnimations() {
  observeAndAnimateClaims('korea');
  observeAndAnimateClaims('japan');
}

function observeAndAnimateClaims(section) {
  const container = document.getElementById(`${section}-claims`);
  if (!container) return;

  if (container.children.length > 0) {
    animateClaimCards(section);
  }

  const observer = new MutationObserver(() => {
    animateClaimCards(section);
  });

  observer.observe(container, { childList: true });
}

function animateClaimCards(section) {
  const sectionEl = document.querySelector(`.${section}-section`);
  const cards = sectionEl ? sectionEl.querySelectorAll('.claim-card') : [];
  const direction = section === 'korea' ? -60 : 60;

  // Section title animation
  const title = sectionEl ? sectionEl.querySelector('.section-title') : null;
  if (title) {
    gsap.fromTo(title,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionEl,
          start: 'top 70%',
          once: true
        }
      }
    );
  }

  // Underline wipe
  const underline = sectionEl ? sectionEl.querySelector('.title-underline') : null;
  if (underline) {
    gsap.fromTo(underline,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionEl,
          start: 'top 70%',
          once: true
        }
      }
    );
  }

  // Cards stagger in
  cards.forEach((card, i) => {
    gsap.fromTo(card,
      { x: direction, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        delay: i * 0.1,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          once: true
        }
      }
    );
  });
}

/* ========================================
   International Law Section Animations
   ======================================== */

function initLawAnimations() {
  // Scale icon elastic entrance
  gsap.from('.law__scale-icon', {
    rotation: -15,
    opacity: 0,
    duration: 1.5,
    ease: 'elastic.out(1, 0.5)',
    scrollTrigger: {
      trigger: '.law-section',
      start: 'top 70%',
      once: true
    }
  });

  // Section title
  const lawTitle = document.querySelector('.law-section .section-title');
  if (lawTitle) {
    gsap.from(lawTitle, {
      y: 30,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.law-section',
        start: 'top 70%',
        once: true
      }
    });
  }

  // Observe table for language changes
  const table = document.getElementById('comparison-table');
  if (table) {
    const observer = new MutationObserver(() => {
      animateTableRows();
    });
    observer.observe(table, { childList: true, subtree: true });

    if (table.rows.length > 0) {
      animateTableRows();
    }
  }

  // Observe principles
  const principles = document.getElementById('law-principles');
  if (principles) {
    const observer = new MutationObserver(() => {
      animateLawPrinciples();
    });
    observer.observe(principles, { childList: true });

    if (principles.children.length > 0) {
      animateLawPrinciples();
    }
  }
}

function animateTableRows() {
  const rows = document.querySelectorAll('.comparison-table tbody tr');
  rows.forEach((row, i) => {
    gsap.fromTo(row,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: i * 0.1,
        scrollTrigger: {
          trigger: row,
          start: 'top 85%',
          once: true
        }
      }
    );
  });
}

function animateLawPrinciples() {
  const items = document.querySelectorAll('.law__principle');
  items.forEach((item, i) => {
    gsap.fromTo(item,
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        delay: i * 0.15,
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          once: true
        }
      }
    );
  });
}

/* ========================================
   Conclusion Section Animations
   ======================================== */

function initConclusionAnimations() {
  // Pinned section with sequential text reveal
  const conclusionTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.conclusion-section',
      start: 'top top',
      end: '+=150%',
      pin: true,
      scrub: 1
    }
  });

  conclusionTl
    .from('.conclusion__line1', { y: 40, opacity: 0, duration: 1 })
    .from('.conclusion__line2', { y: 40, opacity: 0, duration: 1 }, '+=0.3')
    .from('.conclusion__line3', { y: 40, opacity: 0, duration: 1 }, '+=0.3')
    .from('.conclusion__sources', { y: 30, opacity: 0, duration: 1 }, '+=0.5');
}

/* ========================================
   Batch Fade-Up Utility
   ======================================== */

function initFadeUpBatch() {
  ScrollTrigger.batch('.fade-up', {
    onEnter: (elements) => {
      gsap.from(elements, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });
    },
    start: 'top 85%',
    once: true
  });
}
