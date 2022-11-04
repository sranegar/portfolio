import * as MODEL from "./model.js";

 

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
 let pageIDArray = pageID.split("/");

 pageID = pageIDArray[0];
 let subPageID = pageIDArray[1];

  if (!pageID) {
    MODEL.changePage("work");
  } else if (pageID == "" || pageID == "home") {
    MODEL.changePage(pageID);
  } else if (pageID == "work") {
    MODEL.changePage(pageID);
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
