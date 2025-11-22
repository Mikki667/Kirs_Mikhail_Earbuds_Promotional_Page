(() => {

  console.log("IIFE Called for explode view");

  const menu = document.querySelector("#menu");
  const hamburger = document.querySelector("#hamburger");
  const closeButton = document.querySelector("#close");
  const menuLinks = document.querySelectorAll("#menu nav ul li a");

  const navScrollLinks = document.querySelectorAll('a[href^="#"]');
  const fixedHeader = document.querySelector('header');

  const quickBuyButton = document.querySelector('.quick-buy-btn');
  const visitSqueezitButton = document.querySelector('.video-btn');

  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {
      image: "images/earpiece.jpg",
      title: "earpiece",
      text: "The earpiece delivers clear, balanced sound directly to your ear. Its smooth shape and soft padding ensure comfort during long listening sessions."
    },
    {
      image: "images/logo.jpg",
      title: "logo",
      text: "The logo represents the redesigned 'Squeezit' brand, blending its playful identity with an alien-inspired theme. The bold green and purple design gives it a distinctive, otherworldly vibe."
    },
    {
      image: "images/flying_saucer.jpg",
      title: "flying saucer",
      text: "This rounded outer shell protects the internal speakers. Its shiny purple surface and aerodynamic curves make it resemble a flying saucer in motion."
    },
    {
      image: "images/power_block.jpg",
      title: "power block",
      text: "The power block connects the system and provides stability. Its clean design and green outline complement the rest of the headset’s aesthetic."
    }
  ]

  const divisor = document.querySelector("#divisor");
  const slider = document.querySelector("#slider");

//functions
  
  function measureHeaderHeight(){
  if (!fixedHeader){
  return 0;
  }

  return fixedHeader.offsetHeight;
  }

  function smoothLinkScroll(event) {
  event.preventDefault();
  const destinationId = event.currentTarget.getAttribute('href');
  const destinationSection = document.querySelector(destinationId);
  if (!destinationSection) {
  return;
  }

  const headerOffset = measureHeaderHeight();
  const sectionPosition = destinationSection.getBoundingClientRect().top + window.pageYOffset;
  const finalScrollPosition = sectionPosition - headerOffset;

  window.scrollTo({
    top: finalScrollPosition,
    behavior: 'smooth'
  });
}

function registerScrollHandler(link) {
  link.addEventListener('click', smoothLinkScroll);
}

  function toggleMenu() {
    menu.classList.toggle("open");
  }

  function handleQuickBuyClick() {
  alert('Quick Buy activated!');
  }

  function handleVisitSqueezitClick() {
  alert('In the final version this button would link to the Squeezit site.');
  }

  function loadInfo() {
    infoBoxes.forEach((infoBox, index)=>{
      // console.log(index+1);
      //selected will be the inforBox on our page, e.g.hotspot-1, hotspot-2, etc.
      let selected = document.querySelector(`#hotspot-${index+1}`);
      console.log(selected);

      //lets create an img
      const imageElement = document.createElement('img');
      //lets populate the img
      imageElement.src = infoBox.image;

      //lets create an h2
      const titleElement = document.createElement('h2');
      //lets populate the h2
      titleElement.textContent = infoBox.title;

      //lets create a p
      const textElement = document.createElement('p');
      //lets populate the p
      textElement.textContent = infoBox.text;

      //lets add the img to the selected hotspot
      selected.appendChild(imageElement);
      //lets add the h2 to the selected hotspot
      selected.appendChild(titleElement);
      //lets add the p to the selected hotspot
      selected.appendChild(textElement);

    });
  }
  loadInfo();

   function showInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
    let selected = document.querySelector(`#${this.slot}`);
    gsap.set(selected, { y: 0 });
    gsap.to(selected, { duration: 1, autoAlpha: 1 });
    gsap.to(selected, {
    duration:1.5,
    ease: "bounce.out",
    y: -100
    });
    
  }

  function hideInfo() {
    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 0 });
  }

  function moveDivisor() {
      // console.log(slider.value);
      divisor.style.width = `${slider.value}%`;
    }

    function resetSlider() {
        slider.value = 50;
    }
  
  closeButton.addEventListener("click", toggleMenu);

  menuLinks.forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });

  hamburger.addEventListener("click", toggleMenu);

  navScrollLinks.forEach(registerScrollHandler); 

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

  slider.addEventListener("input", moveDivisor);
  window.addEventListener("load", resetSlider);

  if (quickBuyButton) {
  quickBuyButton.addEventListener('click', handleQuickBuyClick);
  }

  if (visitSqueezitButton) {
  visitSqueezitButton.addEventListener('click', handleVisitSqueezitClick);
  }

  // I wanted to put it all in the right places but it was all a bit confusing for me so I left it here

  const canvas = document.querySelector("#explode-view");

  if (!canvas) {
    return;
  }

  const context = canvas.getContext("2d");
  canvas.width = 1920;
  canvas.height = 1080;

  //How many still frames do we have, you will need to adjust this
  const frameCount = 260;

  //array to hold our images
  const images = [];

  //object will hold the current frame
  //we will use GreenSock to animate the frame property
  const buds = {
    frame: 0
  };

  //Run a for loop to populate images array
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    const frameNumber = i.toString().padStart(5, "0");
    img.src = `images/earbudsvideo_${frameNumber}.jpg`;
    images.push(img);
  }
  console.log(images);

  gsap.to(buds, {
    frame: frameCount - 1,
    snap: "frame",
    scrollTrigger: {
      trigger: "#explode-view",
      pin: true,
      scrub: 1,
      start: "top top",
      markers: true 
    },
    onUpdate: render
  });

  images[0].addEventListener("load", render);

  function render() {
    //console.log(buds.frame);
    //console.log(images[buds.frame]);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[buds.frame], 0, 0);
  }

})();