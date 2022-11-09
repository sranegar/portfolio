var columns = [
  {
    projects: [
      {
        id: 0,
        title: "Irving Materials Inc.",
        subtitle: "Next.js",
        img: "assets/images/poster-truck.jpg",
     subDetails: "Landing Page Solution",
     details: "",
     href: "https://driveimi.com/"
      },
      {
        id: 1,
        title: "GamePlanet E-Commerice",
        subtitle: "PHP, MySQL, JavaScript",
        img: "assets/images/game-planet2.jpg",
        subDetails: "E-Commerce Web Solution",
        details: "",
        href: ""
      },
    ],
  },
  {
    projects: [
      {
        id: 2,
        title: "NewsLetter Template",
        subtitle: "HTML, CSS, Mailchimp",
        img: "assets/images/mas1.jpg",
        subDetails: "Email Template Design",
        details: "",
        href: ""
      },

      {
        id: 3,
        title: "Brighter Days CBD",
        subtitle: "Next.js",
        img: "assets/images/brighter-days.jpg",
        subDetails: "E-Commerce Design Solution",
        details: "",
        href: ""
      },
    ],
  },
  {
    projects: [
      {
        id: 4,
        title: "Music Player Mobile App",
        subtitle: "REST API / React.js",
        img: "assets/images/music-app.jpg",
        subDetails: "MP3 Player",
        details: "",
        href: ""
      },
      {
        id: 5,
        title: "Website Design Overhaul",
        subtitle: "WordPress",
        img: "assets/images/hct.jpg",
        subDetails: "Re-design Solution",
        details: "",
        href: ""
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
        $("#modal").css("display", "none");
      });
      let pageColumn = "";
      
      $.each(columns, (idx, col) => {
        pageColumn += `<div class="work-col">`;
       
        
        $.each(col.projects, (id, proj) => {
        
          pageColumn += ` <div class="project-container" id=${proj.id}">
          <div class="image-container proj1">     
                  <img src=${proj.img} alt="Drive imi Project" />   
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
  </div>`;
         
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
  } else {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      $("#app").html(data);
      $("#nav-bar").css("display", "flex");
    });
  }
}

export function viewProject(projId) {
  console.log(projId)
  let projIdArray = projId.split("");
  let colId = projIdArray[0]
  let projIndex = projIdArray[1]
  let projID = projIdArray[2]
 
   curProject = columns[colId].projects[projIndex];
   console.log(curProject)
  if (curProject.id == projID) {
    $("#modal-content img").attr("src", curProject.img)
    $("#modal-content a").attr("href", curProject.href)
    $("#modal-content h2").text(curProject.title)
    $("#modal-content h4").text(curProject.subDetails)
    $("#modal-content p").text(curProject.details);
  }
 
}