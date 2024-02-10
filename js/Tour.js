AFRAME.registerComponent("tour", {
    init: function () {
      this.placesContainer = this.el;   
      this.createCards();
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "taj-mahal",
          title: "Taj Mahal",
          url: "./assets/thumbnails/taj_mahal.png",
        },
        {
          id: "budapest",
          title: "Budapest",
          url: "./assets/thumbnails/budapest.jpg",
        },
  
        {
          id: "eiffel-tower",
          title: "Eiffel Tower",
          url: "./assets/thumbnails/eiffel_tower.jpg",
        },
        {
          id: "new-york-city",
          title: "New York City",
          url: "./assets/thumbnails/new_york_city.png",
        },
      ];
      
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id);
  
        // Thumbnail Element
        const thumbNail = this.createThumbNail(item);
        borderEl.appendChild(thumbNail);
  
        // Title Text Element
        const titleEl = this.createTitleEl(position, item);
        borderEl.appendChild(titleEl);
  
        this.placesContainer.appendChild(borderEl);
      }
    },
   
    //create Border



    //create Thumbnail



    //create title
    





  });
  