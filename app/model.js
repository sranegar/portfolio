var contactFormInfo = {}

var columns = [
  {
    projects: [
      {
        id: 0,
        title: "Irving Materials Inc.",
        subtitle: "Next.js, Figma",
        img: "assets/images/poster-truck.jpg",
        subDetails: "Landing Page Marketing Solution",
        details:
          "Drive IMI is a marketing design solution for Irving Materials Inc (often referred as imi). I collaborated with the development and marketing teams at imi to design a fully responsive landing page and developed it in Next.js. The page content changes depending on which state the user chooses from a dropdown list upon entry. The alterating page content challenged me how to focus on a design that could change effortlessly and still look look great. I utilized Semantic UI for styled components and found using their Grid extremely helpful for making content beautifully adaptive and responsive.",
        href: "https://driveimi.com/",
        images: [
          "assets/images/drive-imi.png",
          "assets/images/drive-imi-2.png",
          "assets/images/drive-imi-3.png",
        ],
      },
      {
        id: 1,
        title: "GamePlanet E-Commerice",
        subtitle: "PHP, JavaScript, MySQL",
        img: "assets/images/game-planet2.jpg",
        subDetails: "GamePlanet CRUD App and Design",
        details:
          "GamePlanet is a database-driven CRUD application and design written in PHP,  Javascript, MySQL, HTML, and CSS. This was my first CRUD application that sits near and dear to my heart. You may login as username: admin, password: password to utilize the CRUD features. The shopping cart functions to store items when clicked from the individual items page. You can't actually buy anything from my made up company, but you can have fun seeing all of the features. I also created the GamePlanet logo to really tie the room together.",
        href: "https://gameplanet-mvc.herokuapp.com/",
        images: ["assets/images/poster-truck.jpg", "assets/images/slide1.JPG"],
      },
    ],
  },
  {
    projects: [
      {
        id: 2,
        title: "Newsletter",
        subtitle: "HTML, CSS, Mailchimp",
        img: "assets/images/mas1.jpg",
        subDetails: "Email Template",
        details:
          "An email template solution for the director of the Media Arts and Science program at the School of Informatics and Computiner - IUPUI. The template serves to provide the client with showcasing video content, images, and links. Compatible with light and dark mode email client settings. The MAS Newsletter logo header was designed in a light and dark version to hit perfection from every angle.",
        href: "",
        images: ["assets/images/poster-truck.jpg", "assets/images/slide1.JPG"],
      },

      {
        id: 3,
        title: "Brighter Days CBD",
        subtitle: "HTML, SCSS, JavaScript",
        img: "assets/images/brighter-days.jpg",
        subDetails: "E-Commerce Design",
        details:
          "Brighter Days is a front-end website design solution and mockup brand written in HTML, SCSS and Javascript and focused on fast loading and design responsiveness. The design prototype was created in Adobe XD. This is my most favorable piece of work and it made me so extremely happy throughout the entire production process. Be sure to visit the live version hosted through GitHub and hover through all the buttons.",
        href: "https://in-info-web4.informatics.iupui.edu/~sranegar/e-commerce-cbd/index.html",
        images: ["assets/images/poster-truck.jpg", "assets/images/slide1.JPG"],
      },
    ],
  },
  {
    projects: [
      {
        id: 4,
        title: "Music Player App",
        subtitle: "REST API / React.js, MySQL",
        img: "assets/images/music-app.jpg",
        subDetails: "MP3 Player",
        details:
          "A single page Music Player application client built in React that consumes web service data provided by a music API written in PHP using RESTful API. This was a passion project that allowed me be equal parts developer and designer. I designed and made a relational database that stores music by artists, albums, collections, tracks, and genres. Check it out and see what I like to jam out to! Shoot me a message if you would like to collaborate on a music app.",
        href: "",
        images: ["assets/images/poster-truck.jpg", "assets/images/slide1.JPG"],
      },
      {
        id: 5,
        title: "Hendricks Civic Theatre",
        subtitle: "WordPress, Divi Builder, Photoshop",
        img: "assets/images/hct.jpg",
        subDetails: "Website Re-design Solution",
        details:
          "HCT Website and Social Media Overhaul 2022 was a project collaboration with a design team made of an array of skills including video production, 2D illustration, graphic design, web design, and web development. I served as the project manager and web developer / web designer. The delivered project updated HCT's web presence and provided them with resources to improve website and social media maintainability.",
        href: "",
        images: ["assets/images/poster-truck.jpg", "assets/images/slide1.JPG"],
      },
    ],
  },
];

var curProject = {};

export function changePage(pageID, subPage, callback, callbackTwo) {
  //HOME
  if (pageID == "" || pageID == "home") {
    $.get(`pages/${pageID}/home.html`, function (data) {
      // $("html, body").animate({
      //   scrollTop: 0
      // }, 200)
      $("#app").html(data);
      $("#nav-bar").css("top", "");
      $("#nav-bar").css("bottom", "0");
    });
    
  } else if (pageID == "work") {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      $("#app").html(data);
      $("#nav-bar").css("bottom", "");
      $("#nav-bar").css("top", "0");

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
       $("head").append('<script src="app/particles.js"></script>');
       $("body").append(`<div id="particles-js"></div>`);
    });
  } else if (pageID == "about") {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      $("#nav-bar").css("bottom", "");
      $("#nav-bar").css("top", "0");
      $("#app").html(data);
    });
  } else if (pageID == "contact") {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      $("#nav-bar").css("bottom", "");
      $("#nav-bar").css("top", "0");
      $("#app").html(data);
   
    });
  } else {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      $("#app").html(data);
      $("#nav-bar").css("display", "flex");
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
}

export function setFormInputs(formInputs) {
  contactFormInfo = formInputs;
}
