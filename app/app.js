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

  function openModal() {
     $(".work-btn-wrapper button").click(function (e) {
     
      let projID = e.currentTarget.id;
      MODEL.viewProject(projID)
      $("#modal").css("visibility",  "visible");
     })
    
  }
  
  
function initApp() {
  $(window).on("hashchange", route);
}

function initListeners() {
  $(window).on("load", route);   
}
 
 
 
$(document).ready(function () {
 
  $(".slider").slick({
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    cssEase: "linear",
  });
  initListeners();
  initApp();

});
 