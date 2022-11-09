import * as MODEL from "./model.js";

 
function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
 let pageIDArray = pageID.split("/");
 
 pageID = pageIDArray[0];
 let subPageID = pageIDArray[1];

  if (!pageID) {
    MODEL.changePage("home");
  } else if (pageID == "" || pageID == "home") {
    MODEL.changePage(pageID);
  } else if (pageID == "work") {
    MODEL.changePage(pageID, subPageID, openModal );
  } else {
    if (pageID === subPageID) {
      MODEL.changePage(pageID);
    } else {
      MODEL.changePage(pageID, subPageID);
    }
  }
}

 function toggleActive() {
   $("a").click(function (e) {
     let linkID = e.currentTarget.id;
     $(linkID).toggleClass("active-link na");
     
  console.log(linkID)
     
    })
  }

  function openModal() {
     $(".work-btn-wrapper button").click(function (e) {
      let projID = e.currentTarget.id;

    
      MODEL.viewProject(projID)
      $("#modal").css("display",  "flex");
     })
  }
    
 

  // function changePhoto() {}
  // $("#modal .fa-circle-chevron-right").click(function () {
  //   $("#modal").css("display", "none");
  // })

  
function initApp() {
  $(window).on("hashchange", route);
}

function initListeners() {
    // $("a").hover(function () {
    //   $(this).toggleClass("active-link");
    // });
  $(window).on("load", route);
}

$(document).ready(function () {
  initListeners();
  initApp();
 
 
});
