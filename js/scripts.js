window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(document.querySelectorAll("#navbarResponsive .nav-link"));
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  function initializeSlider(sliderId) {
    const slider = document.querySelector(`.slider[data-slider-id="${sliderId}"]`);
    const sliderTrack = slider.querySelector(".slider-track");
    const images = slider.querySelectorAll(".slider-image");
    let currentImageIndex = 0;
    const totalImages = images.length;

    // Automatisches Scrollen alle 3 Sekunden
    let autoSlideInterval = setInterval(() => {
      changeImage(1);
    }, 3000);

    function changeImage(direction) {
      currentImageIndex += direction;

      // Begrenze den Index
      if (currentImageIndex < 0) {
        currentImageIndex = totalImages - 1;
      } else if (currentImageIndex >= totalImages) {
        currentImageIndex = 0;
      }

      // Slider-Bewegung
      sliderTrack.style.transition = "transform 1s ease";
      sliderTrack.style.transform = `translateX(${-currentImageIndex * 100}%)`;

      // Starte den automatischen Übergang neu
      clearInterval(autoSlideInterval); // Verhindere das automatische Scrollen während der Benutzerinteraktion
      autoSlideInterval = setInterval(() => {
        changeImage(1);
      }, 3000);
    }

    // Event Listener für die Pfeile
    slider.querySelector(".arrow-left").addEventListener("click", () => {
      changeImage(-1);
    });

    slider.querySelector(".arrow-right").addEventListener("click", () => {
      changeImage(1);
    });
  }

  // Initialisiere den Slider, wenn das Modal geöffnet wird
  document.querySelectorAll(".portfolio-modal").forEach((modal) => {
    modal.addEventListener("shown.bs.modal", function () {
      const sliderId = this.getAttribute("id").replace("portfolioModal", "");
      initializeSlider(sliderId);
    });
  });
  // Funktion, um das Bild in die Mitte des Bildschirms zu scrollen, wenn das Modal geöffnet wird
  const modalIds = [
    "portfolioModal1",
    "portfolioModal2",
    "portfolioModal3",
    "portfolioModal4",
    "portfolioModal5",
    "portfolioModal6",
  ];

  modalIds.forEach((id) => {
    document.getElementById(id).addEventListener("shown.bs.modal", function () {
      const modalSlider = this.querySelector(".slider"); // Wählt den Slider im aktuell geöffneten Modal
      if (modalSlider) {
        modalSlider.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    });
  });
  
});

  