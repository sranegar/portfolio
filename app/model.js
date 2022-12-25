var contactFormInfo = {};

var columns = [
  {
    projects: [
      {
        id: 0,
        title: "Irving Materials Inc.",
        subtitle: "Next.js, Semantic UI, Figma",
        img: "assets/images/imi.jpg",
        subDetails: "Landing Page Marketing Solution",
        details:
          "Drive IMI is a marketing design solution for Irving Materials Inc. I collaborated with the development and marketing teams at IMI and to design a fully responsive landing page utalizing Semantic UI's component library and Next.js for development. I took full ownership of this project from conception to deployment and contributed to design, architecture, and software decisions. The pages are programmed dynamically to alter content for each state's job opportunities and services. This project challenged me how to focus on a design that could alter effortlessly and cohesively on all devices to accomdate the dynamic content. I utilized Semantic UI for styled components and found using their grid extremely helpful for responsiveness.",
        href: "https://drive-imi-master.vercel.app/",
        images: [
          "assets/images/slider-images/drive-imi-1.jpg",
          "assets/images/slider-images/drive-imi-2.jpg",
          "assets/images/slider-images/drive-imi-3.jpg",
        ],
      },
      {
        id: 1,
        title: "GamePlanet Web App",
        subtitle: "PHP, JavaScript, MySQL",
        img: "assets/images/gamePlanetBW.jpg",
        subDetails: "Web app / E-commerce design",
        details:
          "GamePlanet is a database-driven CRUD application designed with MVC written in PHP, Javascript, MySQL, HTML, and CSS. Admin credentials utilize the CRUD features. I developed and designed all web pages, designed the GamePlanet logo, and created a relational database to store data. This project was a form of personal practice for me to expand on my full stack development skills. Note: I lost deployment of this site due to herokus deprecation of free services.",
        href: "",
        images: [
          "assets/images/slider-images/game-planet.jpg",
          "assets/images/slider-images/game-planet-3.jpg",
          "assets/images/slider-images/game-planet-2.jpg",
        ],
      },
    ],
  },
  {
    projects: [
      {
        id: 2,
        title: "MAS Newsletter",
        subtitle: "HTML, CSS",
        img: "assets/images/masNewsletter.png",
        subDetails: "Email Template",
        details:
          "An email template solution for the director of the Media Arts and Science program at the School of Informatics and Computiner - IUPUI. I completed this project from start to finish by designing the template to meet the client's needs and developing to be fully responsive and compatible with light mode and dark mode email client settings. In addition, I created the page header graphic in two different color versions to add a unique touch while still maintaining brand guidelines.",
        href: "https://sranegar.github.io/masNewsletter/",
        images: [
          "assets/images/slider-images/newsletter.jpg",
          "assets/images/slider-images/newsletter2.jpg",
          "assets/images/slider-images/newsletter3.jpg",
        ],
      },

      {
        id: 3,
        title: "Brighter Days",
        subtitle: "HTML, Sass, JavaScript",
        img: "assets/images/brighter-days.jpg",
        subDetails: "Front-end design / brand development",
        details:
          "Brighter Days is a front-end website design template and brand identity written in HTML, Sass, and Javascript with a focus on fast loading, design responsiveness, and CSS animations. This was purely made out of joy and allowed me to practice my front-end skills and embrace creativity. I started this project in Adobe XD and developed clean code by utilizing reusable components via Mixins.",
        href: "https://sranegar.github.io/e-commerce-cbd/",
        images: [
          "assets/images/slider-images/cbd1.jpg",
          "assets/images/slider-images/cbd2.jpg",
          "assets/images/slider-images/cbd3.jpg",
        ],
      },
    ],
  },
  {
    projects: [
      {
        id: 4,
        title: "Music Player App",
        subtitle: "RESTful API, PHP, ReactJS, MySQL",
        img: "assets/images/musicPlayer.jpg",
        subDetails: "MP3 Player",
        details:
          "A single page Music Player application client built in React that consumes web service data provided by a music API written in PHP using RESTful API. This was a solo passion project that allowed me to expand my practice as a full stack developer to understand all processes of backend and frontend development. I built the music API using PHP and a relational database that stored all data. The client successfully pulls all data and plays music. The music player also has a progress bar that animates along with the music. Note: I am having trouble deploying this on my own. If you feel like you can help- please contact me!",
        href: "",
        images: [
          "assets/images/slider-images/mp3.jpg",
          "assets/images/slider-images/mp3-2.jpg",
          "assets/images/slider-images/mp3-3.jpg",
        ],
      },
      {
        id: 5,
        title: "Hendricks Civic Theatre",
        subtitle: "WordPress, Adobe Software",
        img: "assets/images/hct.jpg",
        subDetails: "Website Re-design Solution",
        details:
          "Collaborated with a design team to solve client's problems by creating web and new media solutions. I was the project manager, web developer, and web designer for this project. The solution led to the client selling out of all remaining 2022 theatre shows for the first time in several years. The final delivery included a website redesign with improved functionality to meet client's needs, content creation for social media marketing, and resources to improve website and social media maintainability.",
        href: "https://www.hendrickscivic.com",
        images: [
          "assets/images/slider-images/hct.jpg",
          "assets/images/slider-images/hct-2.png",
          "assets/images/slider-images/hct-3.png",
        ],
      },
    ],
  },
];

var curProject = {};

export function changePage(pageID, subPage, callback, callbackTwo) {
  //HOME
  if (pageID == "" || pageID == "home") {
    $.get(`pages/home/home.html`, function (data) {
      $("#app").html(data);

      particlesJS("particles-js", {
        particles: {
          number: {
            value: 355,
            density: {
              enable: true,
              value_area: 789.1476416322727,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "star",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.48927153781200905,
            random: false,
            anim: {
              enable: true,
              speed: 0.2,
              opacity_min: 0,
              sync: false,
            },
          },
          size: {
            value: 2.3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
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
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "push",
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
              distance: 83.91608391608392,
              size: 1,
              duration: 3,
              opacity: 1,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    });
  } else if (pageID == "work") {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      $("#app").html(data);

      $("html, body").animate({ scrollTop: 0 }, "slow");

      $("#modal .fa-xmark").click(function () {
        $("#modal").css("visibility", "hidden");
      });

      let pageColumn = "";

      $.each(columns, (idx, col) => {
        pageColumn += `<div class="work-col">`;

        $.each(col.projects, (id, proj) => {
          pageColumn += ` <div class="project-container" id=${proj.id}">
          <div class="image-container proj1">     
                  <img src=${proj.img} alt="${proj.title}" />   
              <div class="title-wrapper">
                  <div class="title">
                  ${proj.title}
                  </div>
                  <p class="subtitle">${proj.subtitle}</p>
                  <div class="work-btn-wrapper">
                      <button id=${idx}${id}${proj.id} type="button" class="work-btn">View More</button>
                  </div>
              </div>
          </div>
  </div> <script type='module' src="app/slider.js"></script>`;
        });

        pageColumn += `</div>`;
      });

      $(".work-wrapper").append(pageColumn);

      callback();
    });
  } else if (pageID == "about") {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      $("#app").html(data);
    });
  } else if (pageID == "contact") {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      $("#app").html(data);
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 355,
            density: {
              enable: true,
              value_area: 789.1476416322727,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "star",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.48927153781200905,
            random: false,
            anim: {
              enable: true,
              speed: 0.2,
              opacity_min: 0,
              sync: false,
            },
          },
          size: {
            value: 2.3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
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
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "push",
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
              distance: 83.91608391608392,
              size: 1,
              duration: 3,
              opacity: 1,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
      callback();
    });
  } else if (pageID == "resume") {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      $("#app").html(data);
    });
  } else {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      $("#app").html(data);
    });
  }
}

export function viewProject(projId) {
  let projIdArray = projId.split("");
  let colId = projIdArray[0];
  let projIndex = projIdArray[1];
  let projID = projIdArray[2];
  curProject = columns[colId].projects[projIndex];
  let slideImages = curProject.images;

  if (curProject.id == projID) {
    $("#slide1").attr("src", slideImages[0]);
    $("#slide2").attr("src", slideImages[1]);
    $("#slide3").attr("src", slideImages[2]);
    $("#modal-content a").attr("href", curProject.href);
    $("#modal-content h2").text(curProject.title);
    $("#modal-content h4").text(curProject.subDetails);
    $("#modal-content p").text(curProject.details);
  }

  if (curProject.href == "") {
    $(".modal-bottom a").css("display", "none");
  } else {
    $(".modal-bottom a").css("display", "block");
  }
  
}

export function setFormInputs() {
  $("#contactForm").submit();
}
