/* ===================================
   독도 이야기 - Main Script
   GSAP Animations + Navigation
   =================================== */

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Navigation (always active) ---
  initNavBackground();

  // --- Hero scroll deblur (always active — user-controlled) ---
  initHeroAnimations(prefersReducedMotion);

  // --- Pinned sections always initialize (core navigation, not decorative) ---
  initTimelineAnimations(prefersReducedMotion);
  initConclusionAnimations();

  // --- Lightbox for timeline images (always active) ---
  initLightbox();

  if (prefersReducedMotion) {
    // Make all non-pinned content visible without entrance animations
    gsap.set('.fade-up, .claims-issue, .claims-issue__header, .claims-col, .claims-analysis, .law__principle, .law__indicator, .law__summary-box, .fact-card, .fact-card--overlay, .geo-tl-transition', {
      opacity: 1, y: 0, x: 0, scale: 1
    });
    ScrollTrigger.refresh();
    return;
  }

  // --- Default animation settings ---
  gsap.defaults({
    ease: 'power2.out',
    duration: 1
  });

  // --- Section Animations ---
  // Geo section cards + 3D rotation are handled by dokdo3d.js
  initClaimAnimations();
  initLawAnimations();

  // --- Batch fade-up elements ---
  initFadeUpBatch();

  // Force recalculation after all dynamic content is rendered
  ScrollTrigger.refresh();
});

/* ========================================
   Navigation
   ======================================== */

function initNavBackground() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  ScrollTrigger.create({
    trigger: '#timeline',
    start: 'top top+=100',
    onEnter: () => nav.classList.add('nav--scrolled'),
    onLeaveBack: () => nav.classList.remove('nav--scrolled')
  });

  // --- Hamburger menu toggle ---
  var hamburger = document.getElementById('nav-hamburger');
  var navLinks = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('nav__hamburger--open');
      navLinks.classList.toggle('nav__links--open');
    });
  }

  // --- Helper: resolve scroll target for a section id ---
  // Sticky-wrapped sections need to scroll to the wrapper top, not the section itself
  function getSectionTop(id) {
    var el = document.getElementById(id);
    if (!el) return 0;
    var wrapper = el.closest('.geo-sticky-wrapper, .tl-sticky-wrapper, .conclusion-sticky-wrapper');
    var target = wrapper || el;
    return target.getBoundingClientRect().top + window.pageYOffset;
  }

  // --- Nav link click: scroll to section start ---
  if (navLinks) {
    navLinks.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var id = link.getAttribute('href').replace('#', '');
        // Close mobile menu
        if (hamburger) hamburger.classList.remove('nav__hamburger--open');
        navLinks.classList.remove('nav__links--open');
        // Scroll to wrapper top
        window.scrollTo({ top: getSectionTop(id), behavior: 'smooth' });
      });
    });
  }

  // --- Active link highlight on scroll ---
  var sections = ['geography', 'timeline', 'claims', 'law', 'conclusion'];
  var links = {};
  sections.forEach(function (id) {
    var a = navLinks ? navLinks.querySelector('a[href="#' + id + '"]') : null;
    if (a) links[id] = a;
  });

  function setActiveLink(activeId) {
    Object.keys(links).forEach(function (id) {
      links[id].classList.toggle('nav__link--active', id === activeId);
    });
  }

  sections.forEach(function (id) {
    var el = document.getElementById(id);
    var wrapper = el ? el.closest('.geo-sticky-wrapper, .tl-sticky-wrapper, .conclusion-sticky-wrapper') : null;
    var trigger = wrapper || el;
    if (!trigger) return;

    ScrollTrigger.create({
      trigger: trigger,
      start: 'top 50%',
      end: 'bottom 50%',
      onToggle: function (self) {
        if (self.isActive) setActiveLink(id);
      }
    });
  });
}

/* ========================================
   Hero Section Animations
   ======================================== */

function initHeroAnimations(reducedMotion) {
  var mapImg = document.querySelector('.hero__map-img img');
  var mapContainer = document.querySelector('.hero__map-img');
  var mapCaption = document.querySelector('.hero__map-caption');
  var heroBg = document.querySelector('.hero__bg');
  var heroParticles = document.querySelector('.hero__particles');
  var satellite = document.getElementById('hero-satellite');
  var video = document.getElementById('hero-satellite-video');

  // Prepare video for scroll-scrubbing
  var videoReady = false;
  var videoDuration = 5; // fallback
  var videoActivated = false; // decoder activated flag
  var pendingSeekTime = -1; // latest requested currentTime (always applied)

  if (video) {
    video.pause();

    function checkVideoReady() {
      if (videoReady) return true;
      if (video.readyState >= 2 && video.duration && isFinite(video.duration)) {
        videoDuration = video.duration;
        videoReady = true;
        // Apply any pending seek that was requested before video became ready
        if (pendingSeekTime >= 0) {
          video.currentTime = pendingSeekTime;
        }
        return true;
      }
      return false;
    }

    // Listen for multiple events to catch all loading states
    video.addEventListener('loadeddata', checkVideoReady);
    video.addEventListener('canplay', checkVideoReady);
    video.addEventListener('canplaythrough', checkVideoReady);

    // Force load first, then check (handles cached video)
    video.load();

    // Poll for readiness — events can be missed if video is cached
    var readyPollCount = 0;
    var readyPoll = setInterval(function () {
      readyPollCount++;
      if (checkVideoReady() || readyPollCount > 50) {
        clearInterval(readyPoll);
      }
    }, 100);

    // Activate decoder on first user interaction (iOS Safari requirement)
    function activateDecoder() {
      if (videoActivated) return;
      videoActivated = true;
      var p = video.play();
      if (p && p.then) {
        p.then(function () {
          video.pause();
          video.currentTime = 0;
          checkVideoReady();
        }).catch(function () {
          videoActivated = false;
        });
      }
      document.removeEventListener('touchstart', activateDecoder);
      document.removeEventListener('click', activateDecoder);
    }
    document.addEventListener('touchstart', activateDecoder, { passive: true });
    document.addEventListener('click', activateDecoder, { passive: true });

    // Also try activating on first scroll (non-touch devices)
    var scrollActivate = function () {
      if (!videoReady) {
        checkVideoReady();
        if (!videoReady && !videoActivated) {
          activateDecoder();
        }
      }
      document.removeEventListener('scroll', scrollActivate);
    };
    document.addEventListener('scroll', scrollActivate, { passive: true });
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

        // Hero text: fades out in first 10%
        var textP = Math.min(p / 0.10, 1);
        var heroContent = document.querySelector('.hero__content');
        var scrollInd = document.querySelector('.scroll-indicator');
        if (heroContent) {
          heroContent.style.opacity = String(1 - textP);
          heroContent.style.transform = 'translateY(' + (-50 * textP) + 'px)';
        }
        if (scrollInd) {
          scrollInd.style.opacity = String(1 - textP);
        }

        // Phase 1 (0-15%): Old map deblurs
        var blurP = Math.min(p / 0.15, 1);
        var blur = 20 * (1 - blurP);
        var oldOpacity = 0.3 + 0.5 * blurP;
        var scale = 1.08 - 0.08 * blurP;

        // Phase 2 (15-30%): Crossfade — old map fades out, satellite fades in
        if (p > 0.15) {
          var fadeP = Math.min((p - 0.15) / 0.15, 1);
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

        // Phase 3 (30-80%): Satellite zoom out via video scrub
        // Phase 4 (80-100%): Hold on zoomed-out map before next section
        if (p > 0.30 && video) {
          if (!videoReady) checkVideoReady();
          var zoomP = Math.min((p - 0.30) / 0.50, 1);
          var targetTime = zoomP * videoDuration;
          pendingSeekTime = targetTime;
          if (videoReady) {
            video.currentTime = targetTime;
          }

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

        // Map caption: fade in at 8-14%, fade out at 15-22%
        if (mapCaption) {
          var capOp = 0;
          if (p >= 0.08 && p < 0.14) {
            capOp = (p - 0.08) / 0.06;
          } else if (p >= 0.14 && p < 0.15) {
            capOp = 1;
          } else if (p >= 0.15 && p < 0.22) {
            capOp = 1 - (p - 0.15) / 0.07;
          }
          mapCaption.style.opacity = String(Math.max(0, Math.min(1, capOp)));
        }

        // Phase 5 (93-100%): Fade out all fixed layers for smooth transition to geo
        if (p > 0.93) {
          var exitP = (p - 0.93) / 0.07;
          fixedLayers.forEach(function (el) {
            el.style.opacity = String(Math.max(0, 1 - exitP));
          });
        } else if (p > 0.30) {
          // Restore opacity for satellite (already visible) during phase 3-4
          if (satellite) satellite.style.opacity = '1';
        }
      },
      onLeave: function () {
        fixedLayers.forEach(function (el) { el.style.visibility = 'hidden'; el.style.opacity = '0'; });
      },
      onEnterBack: function () {
        fixedLayers.forEach(function (el) { el.style.visibility = 'visible'; el.style.opacity = ''; });
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
   Timeline Section Animations (Horizontal Scroll)
   ======================================== */

var _tlScrollTrigger = null;

var _tlReducedMotion = false;

function initTimelineAnimations(reducedMotion) {
  _tlReducedMotion = !!reducedMotion;
  var container = document.getElementById('tl-track');
  if (!container) return;

  if (container.children.length > 0) {
    setupHorizontalTimeline();
  }

  // Watch for language-switch re-renders
  var observer = new MutationObserver(function () {
    killTimelineScroll();
    requestAnimationFrame(function () { setupHorizontalTimeline(); });
  });
  observer.observe(container, { childList: true });
}

function killTimelineScroll() {
  if (_tlScrollTrigger) {
    _tlScrollTrigger.kill();
    _tlScrollTrigger = null;
  }
  gsap.set('#tl-track', { clearProps: 'transform' });
  gsap.set('.tl-slide__year-badge, .tl-slide__title, .tl-slide__panel, .tl-slide__image, .tl-slide__seal', { clearProps: 'all' });
  gsap.set('.tl-slide__cover-content', { clearProps: 'all' });

  // Reset header and year-bg visibility
  var tlHeader = document.querySelector('.tl__header');
  var yearBg = document.getElementById('tl-year-bg');
  if (tlHeader) { tlHeader.style.opacity = ''; tlHeader.style.pointerEvents = ''; }
  if (yearBg) yearBg.style.opacity = '';

  // Clean up sticky wrapper
  var section = document.querySelector('.timeline-section');
  var wrapper = document.querySelector('.tl-sticky-wrapper');
  if (wrapper && section) {
    section.style.position = '';
    section.style.top = '';
    wrapper.parentNode.insertBefore(section, wrapper);
    wrapper.remove();
  }
}

function setupHorizontalTimeline() {
  var section  = document.querySelector('.timeline-section');
  var track    = document.getElementById('tl-track');
  var slides   = gsap.utils.toArray('.tl-slide');
  var yearBg   = document.getElementById('tl-year-bg');
  var eraBg    = document.getElementById('tl-era-bg');
  var progFill = document.getElementById('tl-progress-fill');
  var progDots = gsap.utils.toArray('.tl__progress-dot');
  var tlHeader = document.querySelector('.tl__header');
  var n = slides.length;
  if (!section || !track || n === 0) return;

  // Cover slide detection (first slide is title card, not an event)
  var hasCover = slides[0] && slides[0].classList.contains('tl-slide--cover');
  var eventOffset = hasCover ? 1 : 0;

  var slideWidth = section.offsetWidth || window.innerWidth;
  var totalTranslate = (n - 1) * slideWidth;

  if (_tlReducedMotion) {
    // Reduced motion: show all slide content immediately, no fade animations
    slides.forEach(function (slide) {
      if (slide.classList.contains('tl-slide--cover')) {
        var cc = slide.querySelector('.tl-slide__cover-content');
        if (cc) gsap.set(cc, { opacity: 1, y: 0 });
        var seal = slide.querySelector('.tl-slide__seal');
        if (seal) gsap.set(seal, { opacity: 0.12 });
      } else {
        gsap.set(slide.querySelectorAll('.tl-slide__year-badge, .tl-slide__title, .tl-slide__panel, .tl-slide__image, .tl-slide__seal'), {
          opacity: 1, y: 0, x: 0
        });
      }
    });
  } else {
    // Hide all slide content initially (will animate per-slide)
    slides.forEach(function (slide) {
      if (slide.classList.contains('tl-slide--cover')) {
        var cc = slide.querySelector('.tl-slide__cover-content');
        if (cc) gsap.set(cc, { opacity: 0, y: 20 });
        var seal = slide.querySelector('.tl-slide__seal');
        if (seal) gsap.set(seal, { opacity: 0 });
      } else {
        var els = slide.querySelectorAll('.tl-slide__year-badge, .tl-slide__title, .tl-slide__panel, .tl-slide__image, .tl-slide__seal');
        gsap.set(els, { opacity: 0, y: 20 });
        var kp = slide.querySelector('.tl-slide__panel--korea');
        var jp = slide.querySelector('.tl-slide__panel--japan');
        if (kp) gsap.set(kp, { x: -30 });
        if (jp) gsap.set(jp, { x: 30 });
      }
    });

    // Show first slide immediately
    showSlideContent(slides[0], 1);
  }

  // Set initial background (use first event slide, not cover)
  var firstEvent = slides[eventOffset];
  if (yearBg && firstEvent) {
    var firstYear = firstEvent.querySelector('.tl-slide__year');
    if (firstYear) yearBg.textContent = firstYear.textContent;
  }
  if (eraBg) eraBg.setAttribute('data-era', (firstEvent || slides[0]).getAttribute('data-era') || 'ancient');

  // Initially hide header and year bg on cover
  if (hasCover) {
    if (tlHeader) { tlHeader.style.opacity = '0'; tlHeader.style.pointerEvents = 'none'; }
    if (yearBg) yearBg.style.opacity = '0';
  }

  // Create sticky wrapper (avoids broken GSAP pin-spacers)
  var wrapper = document.createElement('div');
  wrapper.className = 'tl-sticky-wrapper';
  wrapper.style.height = (n + 1) * 100 + 'vh'; // section height + scroll distance
  wrapper.style.position = 'relative';
  section.parentNode.insertBefore(wrapper, section);
  wrapper.appendChild(section);

  section.style.position = 'sticky';
  section.style.top = '0';

  // Ensure track starts at position 0
  track.style.transform = 'translateX(0px)';

  _tlScrollTrigger = ScrollTrigger.create({
    trigger: wrapper,
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0.3,
    snap: {
      snapTo: 1 / (n - 1),
      duration: { min: 0.2, max: 0.5 },
      delay: 0.1,
      ease: 'power1.inOut'
    },
    onLeaveBack: function () {
      // Reset track when scrolling back above the section
      track.style.transform = 'translateX(0px)';
      if (hasCover && !_tlReducedMotion) {
        showSlideContent(slides[0], 1);
      }
    },
    onUpdate: function (self) {
      var progress = self.progress;

      // 1. Translate track horizontally
      track.style.transform = 'translateX(' + (-progress * totalTranslate) + 'px)';

      // 2. Active slide index
      var activeIdx = Math.round(progress * (n - 1));
      activeIdx = Math.max(0, Math.min(n - 1, activeIdx));

      // 3. Background year (skip cover slide)
      if (yearBg) {
        var eventIdx = Math.max(eventOffset, activeIdx);
        var yr = slides[eventIdx].querySelector('.tl-slide__year');
        if (yr) yearBg.textContent = yr.textContent;
        // Hide year bg on cover slide
        yearBg.style.opacity = activeIdx < eventOffset ? '0' : '';
      }

      // 4. Era background
      if (eraBg) {
        var eraIdx = Math.max(eventOffset, activeIdx);
        eraBg.setAttribute('data-era', slides[eraIdx].getAttribute('data-era') || 'ancient');
      }

      // 5. Progress bar fill (map to event range only)
      if (progFill) {
        var eventProgress = hasCover ? Math.max(0, (progress * (n - 1) - eventOffset) / (n - 1 - eventOffset)) : progress;
        progFill.style.transform = 'scaleX(' + Math.min(1, eventProgress) + ')';
      }

      // 6. Progress dots (offset by cover)
      var activeDotIdx = activeIdx - eventOffset;
      progDots.forEach(function (dot, i) {
        dot.classList.toggle('tl__progress-dot--active', i === activeDotIdx);
      });

      // 7. Header visibility (hide on cover, show on event slides)
      if (tlHeader && hasCover) {
        tlHeader.style.opacity = activeIdx < eventOffset ? '0' : '';
        tlHeader.style.pointerEvents = activeIdx < eventOffset ? 'none' : '';
      }

      // 8. Slide content animation (skip in reduced motion — all visible)
      if (!_tlReducedMotion) updateSlideContent(slides, progress, n);
    }
  });

  // Progress dot click handlers (offset by cover slide)
  progDots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      if (!_tlScrollTrigger) return;
      var targetProgress = (n > 1) ? (i + eventOffset) / (n - 1) : 0;
      var stStart = _tlScrollTrigger.start;
      var stEnd = _tlScrollTrigger.end;
      var scrollTarget = stStart + targetProgress * (stEnd - stStart);
      gsap.to(window, { scrollTo: scrollTarget, duration: 0.8, ease: 'power2.inOut' });
    });
  });

  // Wheel-based slide navigation — intercepts wheel events to bypass
  // inertial scroll delay (Magic Mouse / trackpad momentum).
  //
  // Gesture detection: after a transition, absorb events where deltaY is
  // decreasing (inertia decay). A new gesture is detected when:
  //   - deltaY spikes up (more than 2× previous + 10), or
  // One scroll gesture = exactly one page transition.
  // Gesture end detected by: 200ms+ time gap OR velocity spike during decay.
  // Key: spike detection only activates AFTER the gesture peak has passed
  // (decay phase), preventing false triggers during the initial rising phase.
  (function () {
    var gestureUsed = false;
    var lastWheelTime = 0;
    var lastTriggeredIdx = -1;
    var scrollTween = null;
    var gesturePeak = 0;    // max |deltaY| seen in current gesture
    var inDecay = false;    // true once |deltaY| drops below peak
    var prevAbsDelta = 0;

    wrapper.addEventListener('wheel', function (e) {
      if (!_tlScrollTrigger || !_tlScrollTrigger.isActive) return;

      var baseIdx = lastTriggeredIdx >= 0
        ? lastTriggeredIdx
        : Math.round(_tlScrollTrigger.progress * (n - 1));
      var dir = e.deltaY > 0 ? 1 : -1;
      var target = baseIdx + dir;

      // At boundaries, allow natural scroll so user can exit the section
      if (target < 0 || target >= n) return;

      e.preventDefault();

      var now = Date.now();
      var absDelta = Math.abs(e.deltaY);
      var elapsed = now - lastWheelTime;
      lastWheelTime = now;

      if (gestureUsed) {
        // Detect new gesture: time gap OR velocity spike during inertia decay
        if (elapsed > 200) {
          gestureUsed = false;
          lastTriggeredIdx = -1;
        } else if (inDecay && absDelta > prevAbsDelta * 2 + 10) {
          // Spike during decay phase → new intentional gesture
          gestureUsed = false;
        } else {
          // Track peak and decay state
          if (absDelta >= gesturePeak) {
            gesturePeak = absDelta; // still rising, update peak
          } else {
            inDecay = true;         // past the peak, now decaying
          }
          prevAbsDelta = absDelta;
          return;
        }
      }

      // Recalculate base from real scroll position
      if (lastTriggeredIdx < 0) {
        baseIdx = Math.round(_tlScrollTrigger.progress * (n - 1));
        target = baseIdx + dir;
        if (target < 0 || target >= n) return;
      }

      // Trigger exactly one transition per gesture
      gestureUsed = true;
      gesturePeak = absDelta;
      inDecay = false;
      prevAbsDelta = absDelta;
      lastTriggeredIdx = target;

      if (scrollTween) scrollTween.kill();

      var targetProgress = target / (n - 1);
      var scrollDest = _tlScrollTrigger.start + targetProgress * (_tlScrollTrigger.end - _tlScrollTrigger.start);

      scrollTween = gsap.to(window, {
        scrollTo: scrollDest,
        duration: 0.4,
        ease: 'power2.inOut',
        onComplete: function () { scrollTween = null; }
      });
    }, { passive: false });
  })();
}

function updateSlideContent(slides, progress, n) {
  var divisions = n - 1 || 1;
  var segLen = 1 / divisions;
  var halfSeg = segLen / 2;
  var fadeWidth = segLen * 0.15;

  for (var i = 0; i < n; i++) {
    // Center each slide's visible range on its snap point i/(n-1)
    var center = i / divisions;
    var lo = center - halfSeg;
    var hi = center + halfSeg;

    if (progress <= lo || progress >= hi) {
      hideSlideContent(slides[i]);
      continue;
    }

    var fadeInEnd = lo + fadeWidth;
    var fadeOutStart = hi - fadeWidth;

    if (progress < fadeInEnd) {
      // Entering
      var t = Math.max(0, (progress - lo) / fadeWidth);
      t = t * t * (3 - 2 * t); // smoothstep
      showSlideContent(slides[i], t);
    } else if (progress > fadeOutStart) {
      // Exiting
      var t2 = Math.max(0, (hi - progress) / fadeWidth);
      t2 = t2 * t2 * (3 - 2 * t2);
      showSlideContent(slides[i], t2);
    } else {
      // Holding
      showSlideContent(slides[i], 1);
    }
  }
}

function showSlideContent(slide, t) {
  // Cover slide: animate the single content block
  if (slide.classList.contains('tl-slide--cover')) {
    var cc = slide.querySelector('.tl-slide__cover-content');
    var seal = slide.querySelector('.tl-slide__seal');
    setElState(cc, { opacity: t, y: 20 * (1 - t) });
    if (seal) setElState(seal, { opacity: 0.12 * t });
    return;
  }

  var badge = slide.querySelector('.tl-slide__year-badge');
  var title = slide.querySelector('.tl-slide__title');
  var kp = slide.querySelector('.tl-slide__panel--korea');
  var jp = slide.querySelector('.tl-slide__panel--japan');
  var img = slide.querySelector('.tl-slide__image');
  var seal = slide.querySelector('.tl-slide__seal');

  setElState(badge, { opacity: t, y: 15 * (1 - t) });
  setElState(title, { opacity: t, y: 10 * (1 - t) });
  if (kp) setElState(kp, { opacity: t, x: -30 * (1 - t) });
  if (jp) setElState(jp, { opacity: t, x: 30 * (1 - t) });
  if (img) setElState(img, { opacity: t, y: 15 * (1 - t) });
  if (seal) setElState(seal, { opacity: 0.12 * t });
}

function hideSlideContent(slide) {
  // Cover slide
  if (slide.classList.contains('tl-slide--cover')) {
    var cc = slide.querySelector('.tl-slide__cover-content');
    if (cc) cc.style.opacity = '0';
    var seal = slide.querySelector('.tl-slide__seal');
    if (seal) seal.style.opacity = '0';
    return;
  }

  var els = slide.querySelectorAll('.tl-slide__year-badge, .tl-slide__title, .tl-slide__panel, .tl-slide__image, .tl-slide__seal');
  for (var i = 0; i < els.length; i++) {
    els[i].style.opacity = '0';
  }
}

function setElState(el, props) {
  if (!el) return;
  if (props.opacity !== undefined) el.style.opacity = props.opacity;
  var transforms = [];
  if (props.x !== undefined) transforms.push('translateX(' + props.x + 'px)');
  if (props.y !== undefined) transforms.push('translateY(' + props.y + 'px)');
  if (props.scale !== undefined) transforms.push('scale(' + props.scale + ')');
  if (transforms.length) el.style.transform = transforms.join(' ');
}

/* ========================================
   Claims Section Animations
   ======================================== */

var _claimsScrubTriggers = [];

function initClaimAnimations() {
  const container = document.getElementById('claims-container');
  if (!container) return;

  if (container.children.length > 0) {
    animateClaimIssues();
  }

  const observer = new MutationObserver(() => {
    animateClaimIssues();
  });

  observer.observe(container, { childList: true });
}

function animateClaimIssues() {
  const sectionEl = document.querySelector('.claims-section');
  if (!sectionEl) return;

  // Kill previous scrub-based triggers (from prior language switch)
  _claimsScrubTriggers.forEach(function(st) { st.kill(); });
  _claimsScrubTriggers = [];

  var isMobile = window.innerWidth <= 768;

  // Section title animation
  const title = sectionEl.querySelector('.section-title');
  if (title) {
    gsap.fromTo(title,
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1,
        scrollTrigger: { trigger: sectionEl, start: 'top 70%', once: true }
      }
    );
  }

  // Underline wipe
  const underline = sectionEl.querySelector('.title-underline');
  if (underline) {
    gsap.fromTo(underline,
      { scaleX: 0 },
      {
        scaleX: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: sectionEl, start: 'top 70%', once: true }
      }
    );
  }

  // Enhanced issue block animations
  const issues = sectionEl.querySelectorAll('.claims-issue');
  issues.forEach(function(issue) {
    var header = issue.querySelector('.claims-issue__header');
    var koreaCol = issue.querySelector('.claims-col--korea');
    var japanCol = issue.querySelector('.claims-col--japan');
    var analysis = issue.querySelector('.claims-analysis');
    var meterFillK = issue.querySelector('.claims-meter__fill--korea');
    var meterFillJ = issue.querySelector('.claims-meter__fill--japan');

    // Pre-set initial invisible state (gsap.set is immediate)
    gsap.set(header, { y: 20, opacity: 0 });
    if (isMobile) {
      gsap.set(koreaCol, { y: 30, opacity: 0 });
      gsap.set(japanCol, { y: 30, opacity: 0 });
    } else {
      gsap.set(koreaCol, { x: -40, opacity: 0 });
      gsap.set(japanCol, { x: 40, opacity: 0 });
    }
    gsap.set(analysis, { y: 25, opacity: 0 });

    // Sequenced entrance timeline
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: issue,
        start: 'top 85%',
        once: true
      }
    });

    // Step 1: Header fades in
    tl.to(header, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' });

    // Step 2: Columns slide in from opposite sides (or bottom on mobile)
    if (isMobile) {
      tl.to(koreaCol, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.2');
      tl.to(japanCol, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.3');
    } else {
      tl.to(koreaCol, { x: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }, '-=0.2');
      tl.to(japanCol, { x: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }, '-=0.6');
    }

    // Step 3: Analysis section reveals with gold line wipe
    tl.to(analysis, {
      y: 0, opacity: 1, duration: 0.6, ease: 'power2.out',
      onStart: function() { analysis.classList.add('claims-analysis--revealed'); }
    }, '+=0.15');

    // Step 4: Meter bars fill to target width
    if (meterFillK && meterFillJ) {
      var targetK = meterFillK.getAttribute('data-target-width') || '50';
      var targetJ = meterFillJ.getAttribute('data-target-width') || '50';
      tl.to(meterFillK, { width: targetK + '%', duration: 1, ease: 'power2.out' }, '-=0.3');
      tl.to(meterFillJ, { width: targetJ + '%', duration: 1, ease: 'power2.out' }, '<');
    }

    // Subtle parallax on issue headers (desktop only)
    if (!isMobile && header) {
      var parallaxST = ScrollTrigger.create({
        trigger: issue,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
        onUpdate: function(self) {
          var offset = (self.progress - 0.5) * -12;
          header.style.transform = 'translateY(' + offset + 'px)';
        }
      });
      _claimsScrubTriggers.push(parallaxST);
    }
  });
}

/* ========================================
   International Law Section Animations
   ======================================== */

var _lawScrubTriggers = [];

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

  // Observe principles for language changes
  const principles = document.getElementById('law-principles');
  if (principles) {
    const observer = new MutationObserver(() => {
      animateLawPrinciples();
      animateLawSummary();
    });
    observer.observe(principles, { childList: true });

    if (principles.children.length > 0) {
      animateLawPrinciples();
      animateLawSummary();
    }
  }
}

function animateLawPrinciples() {
  // Kill previous scrub-based triggers
  _lawScrubTriggers.forEach(function(st) { st.kill(); });
  _lawScrubTriggers = [];

  var items = document.querySelectorAll('.law__principle');
  var scaleIcon = document.querySelector('.law__scale-icon');
  var favorValues = [];

  items.forEach(function(item, i) {
    var indicator = item.querySelector('.law__indicator');
    var isEven = i % 2 === 1;

    // Determine favor direction from indicator class
    var favor = null;
    if (indicator) {
      if (indicator.classList.contains('law__indicator--korea')) favor = true;
      else if (indicator.classList.contains('law__indicator--japan')) favor = false;
    }
    favorValues.push(favor);

    // Alternating entrance: odd from left, even from right
    var fromX = isEven ? 40 : -40;
    gsap.fromTo(item,
      { x: fromX, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.8, delay: i * 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          once: true
        },
        onComplete: function() {
          // Pop indicator badge with elastic ease
          if (indicator) {
            gsap.fromTo(indicator,
              { scale: 0, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.5, ease: 'elastic.out(1, 0.4)' }
            );
          }
        }
      }
    );

    // Set initial state for indicator badge
    if (indicator) {
      gsap.set(indicator, { scale: 0, opacity: 0 });
    }
  });

  // Scale icon tilt based on scroll position through principles
  if (scaleIcon && items.length > 0) {
    var principlesContainer = document.getElementById('law-principles');
    if (principlesContainer) {
      var tiltST = ScrollTrigger.create({
        trigger: principlesContainer,
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: 0.5,
        onUpdate: function(self) {
          var activeIdx = Math.round(self.progress * (items.length - 1));
          var favor = favorValues[Math.min(activeIdx, favorValues.length - 1)];
          var tiltAngle = 0;
          if (favor === true) tiltAngle = -10;
          else if (favor === false) tiltAngle = 10;
          gsap.to(scaleIcon, { rotation: tiltAngle, duration: 0.6, ease: 'power2.out' });
        }
      });
      _lawScrubTriggers.push(tiltST);
    }
  }
}

function animateLawSummary() {
  var summary = document.querySelector('.law__summary-box');
  if (summary) {
    gsap.fromTo(summary,
      { y: 40, opacity: 0, scale: 0.97 },
      {
        y: 0, opacity: 1, scale: 1,
        duration: 1, ease: 'power2.out',
        scrollTrigger: {
          trigger: summary,
          start: 'top 85%',
          once: true
        },
        onComplete: function() {
          summary.classList.add('law__summary-box--revealed');
        }
      }
    );
  }
}

/* ========================================
   Conclusion Section Animations
   ======================================== */

function initConclusionAnimations() {
  var section = document.querySelector('.conclusion-section');
  if (!section) return;

  // Move sources out of the section before wrapping — they're too tall for
  // the 100vh sticky section and should flow naturally below the wrapper.
  var sources = section.querySelector('.conclusion__sources');

  // Create sticky wrapper (avoids broken GSAP pin-spacers)
  var wrapper = document.createElement('div');
  wrapper.className = 'conclusion-sticky-wrapper';
  wrapper.style.height = '250vh'; // 100vh section + 150vh scroll distance
  wrapper.style.position = 'relative';
  section.parentNode.insertBefore(wrapper, section);
  wrapper.appendChild(section);

  // Place sources after the wrapper (before footer)
  if (sources) {
    wrapper.parentNode.insertBefore(sources, wrapper.nextSibling);
  }

  section.style.position = 'sticky';
  section.style.top = '0';

  // Sequential text reveal (sources excluded — always visible)
  var conclusionTl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapper,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1
    }
  });

  conclusionTl
    .from('.conclusion__line1', { y: 40, opacity: 0, duration: 1 })
    .from('.conclusion__line2', { y: 40, opacity: 0, duration: 1 }, '+=0.3')
    .from('.conclusion__line3', { y: 40, opacity: 0, duration: 1 }, '+=0.3');
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

/* ========================================
   Lightbox for Timeline Images
   ======================================== */

function initLightbox() {
  // Create lightbox overlay (once)
  var overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.innerHTML =
    '<div class="lightbox__backdrop"></div>' +
    '<div class="lightbox__content">' +
      '<button class="lightbox__close" aria-label="Close">&times;</button>' +
      '<img class="lightbox__img" src="" alt="" />' +
      '<div class="lightbox__info">' +
        '<span class="lightbox__caption"></span>' +
        '<span class="lightbox__credit"></span>' +
      '</div>' +
    '</div>';
  document.body.appendChild(overlay);

  var lbImg = overlay.querySelector('.lightbox__img');
  var caption = overlay.querySelector('.lightbox__caption');
  var credit = overlay.querySelector('.lightbox__credit');
  var closeBtn = overlay.querySelector('.lightbox__close');
  var backdrop = overlay.querySelector('.lightbox__backdrop');

  function close() {
    overlay.classList.remove('lightbox--open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', function (e) { e.stopPropagation(); close(); });
  backdrop.addEventListener('click', close);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('lightbox--open')) close();
  });

  // Expose globally — called via onclick="window._openLightbox(this)" in image HTML
  window._openLightbox = function (el) {
    lbImg.src = el.getAttribute('data-lightbox') || el.src;
    lbImg.alt = el.alt || '';
    caption.textContent = el.getAttribute('data-lightbox-caption') || '';
    credit.textContent = el.getAttribute('data-lightbox-credit') || '';
    overlay.classList.add('lightbox--open');
    document.body.style.overflow = 'hidden';
  };
}
