(() => {
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

//functions

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
  
 hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

})();