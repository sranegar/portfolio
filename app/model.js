var columns = [
  {
    projects: [
      {
        id: 0,
        title: "Irving Materials Inc.",
        subtitle: "Next.js, Figma",
        img: "assets/images/poster-truck.jpg",
        subDetails: "Landing Page",
        details:
          "Drive IMI is a company landing page that I designed and developed for the marketing team at Irving Materials Inc.",
        href: "https://driveimi.com/",
        images: ["assets/images/imi1.jpg", "assets/images/poster-truck.JPG"],
      },
      {
        id: 1,
        title: "GamePlanet E-Commerice",
        subtitle: "PHP, MySQL, JavaScript",
        img: "assets/images/game-planet2.jpg",
        subDetails: "E-Commerce Application and Design",
        details: "GamePlanet is a database-driven CRUD application and design for a mock brand written in PHP and Javascript.",
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
        details: "An email template designed for a university program that follows proper branding.",
        href: "",
        images: ["assets/images/poster-truck.jpg", "assets/images/slide1.JPG"],
      },

      {
        id: 3,
        title: "Brighter Days CBD",
        subtitle: "Next.js",
        img: "assets/images/brighter-days.jpg",
        subDetails: "E-Commerce Design",
        details: "Brighter Days is a front-end website design solution and mockup brand written in HTML and Javascript. The design and brand mockup was created in Adobe XD. ",
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
        subtitle: "REST API / React.js",
        img: "assets/images/music-app.jpg",
        subDetails: "MP3 Player",
        details: "A single page application client that consumes web service data provided by a music API written in PHP using RESTful API.",
        href: "",
        images: ["assets/images/poster-truck.jpg", "assets/images/slide1.JPG"],
      },
      {
        id: 5,
        title: "Website Design Overhaul",
        subtitle: "WordPress",
        img: "assets/images/hct.jpg",
        subDetails: "Website Re-design Solution",
        details: "A website design overhaul in collaboration with a design team.",
        href: "",
        images: ["assets/images/poster-truck.jpg", "assets/images/slide1.JPG"],
      },
    ],
  },
];

var curProject = {};

export function changePage(pageID, subPage, callback) {
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
    $("#modal-content a").attr("href", curProject.href);
    $("#modal-content h2").text(curProject.title);
    $("#modal-content h4").text(curProject.subDetails);
    $("#modal-content p").text(curProject.details);
  }
}
