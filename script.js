
// navbar start
function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.style.transform === "translateX(0%)" ? navLinks.style.transform = "translateX(100%)" : navLinks.style.transform = "translateX(0%)";
  }
  
  var menuIcon = document.querySelector(".menu-icon");
  menuIcon.addEventListener("click", function () {
    document.querySelector("nav").classList.toggle("active");
  });
  
  // navbar end



  // service section start
   
  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');
  const cardsContainer = document.querySelector('.cards-container');
  
  let scrollAmount = 0;
  const cardWidth = cardsContainer.offsetWidth;
  
  prevButton.addEventListener('click', () => {
    if (scrollAmount !== 0) {
      scrollAmount -= cardWidth;
      cardsContainer.style.transform = `translateX(-${scrollAmount}px)`;
    }
  });
  
  nextButton.addEventListener('click', () => {
    if (scrollAmount < cardsContainer.scrollWidth - cardsContainer.offsetWidth) {
      scrollAmount += cardWidth;
      cardsContainer.style.transform = `translateX(-${scrollAmount}px)`;
    }
  });
  


  // service section end