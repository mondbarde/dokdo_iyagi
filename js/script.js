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
    gsap.set('.fade-up, .claim-card, .timeline__event, .timeline__dot, .law__principle, .geo__map, .map-marker, .map-label--sea, .distance-group, .distance-group text, .distance-label-bg, .fact-card', {
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

        // Phase 3 (55-100%): Satellite zoom out via video scrub
        if (p > 0.55 && video && videoReady) {
          var zoomP = Math.min((p - 0.55) / 0.45, 1);
          video.currentTime = zoomP * videoDuration;
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
  var map = document.querySelector('.geo__map');
  if (!section || !map) return;

  // --- Initial hidden states ---
  gsap.set('.geo__map', { scale: 0.92, opacity: 0 });
  gsap.set('.map-marker', { scale: 0, opacity: 0, transformOrigin: 'center center' });
  gsap.set('.map-label--sea', { opacity: 0 });
  gsap.set('.distance-group--ulleung', { opacity: 0 });
  gsap.set('.distance-group--oki', { opacity: 0 });
  gsap.set('.distance-group--ulleung text, .distance-group--ulleung .distance-label-bg', { opacity: 0 });
  gsap.set('.distance-group--oki text, .distance-group--oki .distance-label-bg', { opacity: 0 });
  gsap.set('.fact-card', { y: 40, opacity: 0 });

  // Set up distance line stroke offsets
  document.querySelectorAll('.distance-line').forEach(function (line) {
    var len = line.getTotalLength();
    gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
  });

  // --- Pinned scroll-driven timeline ---
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.geo-section',
      start: 'top top',
      end: '+=200%',
      pin: true,
      scrub: 1,
      anticipatePin: 1
    }
  });

  tl
    // 1. Map entrance — scale up and fade in
    .to('.geo__map', { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' })

    // 2. East Sea label
    .to('.map-label--sea', { opacity: 0.6, duration: 0.5 }, '-=0.3')

    // 3. Ulleungdo marker pops in
    .to('.map-marker--ulleung', { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2)' })

    // 4. Dokdo marker pops in with emphasis
    .to('.map-marker--dokdo', { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(3)' })

    // 5. Distance line: Ulleungdo → Dokdo draws
    .to('.distance-group--ulleung', { opacity: 1, duration: 0.2 })
    .to('.distance-line--ulleung', { strokeDashoffset: 0, duration: 1, ease: 'power2.inOut' }, '<')

    // 6. 87.4km label fades in
    .to('.distance-group--ulleung text, .distance-group--ulleung .distance-label-bg', { opacity: 1, duration: 0.5 })

    // 7. Oki Islands marker pops in
    .to('.map-marker--oki', { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2)' })

    // 8. Distance line: Dokdo → Oki draws
    .to('.distance-group--oki', { opacity: 1, duration: 0.2 })
    .to('.distance-line--oki', { strokeDashoffset: 0, duration: 1, ease: 'power2.inOut' }, '<')

    // 9. 157.5km label fades in
    .to('.distance-group--oki text, .distance-group--oki .distance-label-bg', { opacity: 1, duration: 0.5 })

    // 10. Fact cards stagger in
    .to('.fact-card', { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 });
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
