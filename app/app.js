import * as MODEL from "./model.js";

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
 

  if (!pageID) {
    MODEL.changePage("about");
  } else if (pageID == "" || pageID == "home") {
    MODEL.changePage(pageID);
  } else {
    MODEL.changePage(pageID);
  } 
}

 function setActive() {
  //  $("a").on("click", function (e) {
  //    let linkID = e.currentValue.id;
  //   console.log(linkID);
  //   setActiveLink(linkID);
  }
    
 
function initApp() {
  $(window).on("hashchange", route);
}

function initListeners() {
    $("a").hover(function () {
      $(this).toggleClass("mouseOver");
    });
  $(window).on("load", route);
}

$(document).ready(function () {
  initListeners();
  initApp();
});
