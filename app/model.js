var contactFormInfo = {}

var columns = [
  {
    projects: [
      {
        id: 0,
        title: "Irving Materials Inc.",
        subtitle: "Next.js",
        img: "assets/images/imi.jpg",
        subDetails: "Landing Page Marketing Solution",
        details:
          "Drive IMI is a marketing design solution for Irving Materials Inc. I collaborated with the development and marketing teams at imi to design a fully responsive landing page and developed it in Next.js. The page content changes depending on which state the user chooses from a dropdown list upon entry. The alterating page content challenged me how to focus on a design that could change effortlessly and still look look great. I utilized Semantic UI for styled components and found using their Grid extremely helpful for making content beautifully adaptive and responsive.",
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
          "GamePlanet is a database-driven CRUD application and design written in PHP,  Javascript, MySQL, HTML, and CSS. Admin credentials utilize the CRUD features. The shopping cart functions to store items when clicked from the individual items page. I developed and designed all web pages, as well as created the GamePlanet logo.",
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
          "An email template solution for the director of the Media Arts and Science program at the School of Informatics and Computiner - IUPUI. The template serves to provide the client with showcasing video content, images, and links. Compatible with light and dark mode email client settings.",
        href: "",
        images: [
          "assets/images/slider-images/newsletter.jpg",
          "assets/images/slider-images/newsletter2.jpg",
          "assets/images/slider-images/newsletter3.jpg",
        ],
      },

      {
        id: 3,
        title: "Brighter Days",
        subtitle: "HTML, SCSS, JavaScript",
        img: "assets/images/brighter-days.jpg",
        subDetails: "Front-end / brand development",
        details:
          "Brighter Days is a front-end website design solution and mockup brand written in HTML, SCSS and Javascript with a focus on fast loading, design responsiveness, and CSS animations. The design prototype was created in Adobe XD.",
        href: "https://in-info-web4.informatics.iupui.edu/~sranegar/e-commerce-cbd/index.html",
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
        subtitle: "REST API / React.js, MySQL",
        img: "assets/images/musicPlayer.jpg",
        subDetails: "MP3 Player",
        details:
          "A single page Music Player application client built in React that consumes web service data provided by a music API written in PHP using RESTful API. This was a passion project that allowed me to expand my practice as a full stack developer and designer. I designed and made a relational database that stores music by artists, albums, collections, tracks, and genres.",
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
        subtitle: "WordPress",
        img: "assets/images/hct.jpg",
        subDetails: "Website Re-design Solution",
        details:
          "HCT Website and Social Media Overhaul 2022 was a project collaboration with a design team made of an array of skills including video production, 2D illustration, graphic design, web design, and web development. I served as the project manager and web developer / web designer. The delivered project updated HCT's web presence and provided them with resources to improve website and social media maintainability.",
        href: "https://www.hendrickscivic.com",
        images: [
          "assets/images/slider-images/hct.jpg",
          "assets/images/slider-images/hct-2.png",
          "assets/images/slider-images/hct-3.jpg",
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
        "particles": {
          "number": {
            "value": 355,
            "density": {
              "enable": true,
              "value_area": 789.1476416322727
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "star",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.48927153781200905,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 0.2,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 2.3,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 2,
              "size_min": 0,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 0.2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 83.91608391608392,
              "size": 1,
              "duration": 3,
              "opacity": 1,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
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
    
      $("#app").html(data);
      particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 355,
            "density": {
              "enable": true,
              "value_area": 789.1476416322727
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "star",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.48927153781200905,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 0.2,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 2.3,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 2,
              "size_min": 0,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 0.2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 83.91608391608392,
              "size": 1,
              "duration": 3,
              "opacity": 1,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
      callback();
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
