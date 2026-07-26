console.log("Portfolio loaded!");


document.querySelectorAll('.project-swiper').forEach(swiperEl => {
  new Swiper(swiperEl, {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: swiperEl.querySelector('.swiper-pagination'),
      clickable: true
    },
    navigation: {
      nextEl: swiperEl.querySelector('.swiper-button-next'),
      prevEl: swiperEl.querySelector('.swiper-button-prev')
    }
  });
});

const typingElement = document.querySelector("#typing");

if (typingElement) {
  typingElement.textContent = "";

  new Typed("#typing", {
    strings: [
      "Statistics and Computer Science @ UIUC",
      "Software Developer",
      "Game Developer",
      "UI Designer"
        ],
    typeSpeed: 55,
    backSpeed: 35,
    backDelay: 1500,
    loop: true
  });
}

const particles = document.querySelector("#particles-js");

if (particles) {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 70,
        density: {
          enable: true,
          value_area: 800
        }
      },

      color: {
        value: "#3a9452"
      },

      shape: {
        type: "circle"
      },

      opacity: {
        value: 0.5
      },

      size: {
        value: 3,
        random: true
      },

      move: {
        enable: true,
        speed: 1.2
      },

      line_linked: {
        enable: true,
        distance: 150,
        color: "#4fa3ff",
        opacity: 0.3,
        width: 1
      }
    },

    interactivity: {
      detect_on: "canvas",

      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },

        onclick: {
          enable: true,
          mode: "push"
        }
      },

      modes: {
        grab: {
          distance: 150,
          line_linked: {
            opacity: 0.6
          }
        },

        push: {
          particles_nb: 4
        }
      }
    }
  });
}
