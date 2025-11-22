(() => {

    console.log("IIFE Called for explode view");
  
    const aboutSection = document.querySelector('#about');
    const featureSection = document.querySelector('#features');
    const featureCards = document.querySelectorAll('.feature-box');
    const arSection = document.querySelector('#ar');
    const xraySection = document.querySelector('#x-ray');
    const quickBuySection = document.querySelector('#quick-buy');
    const extraVideoSection = document.querySelector('.video');

    function registerScrollPlugins() {
    gsap.registerPlugin(ScrollTrigger);
    }

    function createAboutScrollAnimation() {
    if (!aboutSection) {
    return;
    }

    gsap.from(aboutSection, {
    scrollTrigger: {
    trigger: aboutSection,
    start: 'top 80%',
    toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 80,
    duration: 1,
    ease: 'power2.out'
    });
    }

    function createFeatureScrollAnimation() {
    if (!featureSection || featureCards.length === 0) {
    return;
    }

    gsap.from(featureCards, {
    scrollTrigger: {
    trigger: featureSection,
    start: 'top 75%',
    toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 60,
    duration: 0.9,
    ease: 'power2.out',
    stagger: 0.2
    });
    }

    function createArScrollAnimation() {
    if (!arSection) {
    return;
    }

    gsap.from(arSection, {
    scrollTrigger: {
    trigger: arSection,
    start: 'top 80%',
    toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 70,
    duration: 1,
    ease: 'power2.out'
    });
    }

    function createXrayScrollAnimation() {
    if (!xraySection) {
    return;
    }

    gsap.from(xraySection, {
    scrollTrigger: {
    trigger: xraySection,
    start: 'top 80%',
    toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 60,
    duration: 0.9,
    ease: 'power2.out'
    });
    }

    function createQuickBuyScrollAnimation() {
    if (!quickBuySection) {
    return;
    }

    gsap.from(quickBuySection, {
    scrollTrigger: {
    trigger: quickBuySection,
    start: 'top 85%',
    toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 60,
    duration: 0.9,
    ease: 'power2.out'
    });
    }

    function createExtraVideoScrollAnimation() {
    if (!extraVideoSection) {
    return;
    }

    gsap.from(extraVideoSection, {
    scrollTrigger: {
    trigger: extraVideoSection,
    start: 'top 85%',
    toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 60,
    duration: 0.9,
    ease: 'power2.out'
    });
    }

    function initScrollAnimations() {
    registerScrollPlugins();
    createAboutScrollAnimation();
    createFeatureScrollAnimation();
    createArScrollAnimation();
    createXrayScrollAnimation();
    createQuickBuyScrollAnimation();
    createExtraVideoScrollAnimation();
    }

    initScrollAnimations();

})();