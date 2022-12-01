 
$.getScript(
  "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js",
  function () {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: false,
            value_area: 600,
          },
        },
        color: {
          value: "#eafc20",
        },
        shape: {
          type: "star",
          stroke: {
            width: 2,
            color: "#eafc20",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            width: 5,
            height: 5,
          },
        },
        opacity: {
          value: 1,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 1,
            sync: false,
          },
        },
        size: {
          value: 1,
          random: true,
          anim: {
            enable: false,
            speed: 6000,
            size_min: 0.05,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 200,
          color: "#ffffff",
          opacity: 0.1,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "none",
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false,
            mode: "bubble",
          },
          onclick: {
            enable: true,
            mode: "bubble",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 4,
            duration: 2,
            opacity: 8,
            speed: 10,
          },
          repulse: {
            distance: 20,
          },
          push: {
            particles_nb: 2,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
      config_demo: {
        hide_card: false,
        background_color: "#fff",
        background_image: "",
        background_position: "50% 50%",
        background_repeat: "no-repeat",
        background_size: "cover",
      },
    });
   
  }
);  