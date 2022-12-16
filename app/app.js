import * as MODEL from "./model.js";

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  let pageIDArray = pageID.split("/");

  pageID = pageIDArray[0];
  let subPageID = pageIDArray[1];
console.log(pageID)
  if (!pageID) {
    MODEL.changePage("home");
  } else if (pageID == "" || pageID == "home") {
    MODEL.changePage(pageID);
  } else if (pageID == "about") {
    MODEL.changePage(pageID);
  } else if (pageID == "work") {
    MODEL.changePage(pageID, subPageID, openModal);
  } else if (pageID == "contact") {
    MODEL.changePage(pageID, subPageID, initFormListener);
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
    MODEL.viewProject(projID);
    $("#modal").css("visibility", "visible");
  });
}

function initFormListener() {
  $("#submit").on("click", function (e) {
    let fn = $("#name").val();
    let em = $("#email").val();
    let mg = $("#message").val();

    const submitAlert = Swal.mixin({
      padding: "1em",
      icon: "error",
      backdrop: `
    rgba(0,0,0,0.6)
    
   
   
  `,
      confirmButtonColor: "#2feabe",
      showCloseButton: true,

      showConfirmButton: false,
      customClass: {
        fontFamily: "PoppinsReg",
      },
    });

    if (fn == "" || em == "" || mg == "") {
      submitAlert.fire({
        text: "Please fill out all fields.",
        html: '<span class="alert-text">Please fill out all fields.</span>',
      });
    } else {
      $("#contactForm").submit();
    }
  });
}

function initApp() {
  $(window).on("hashchange", route);
  //Mobile nav-menu functionality
  $(".links").on("click", function (e) {
    $("#toggle").prop("checked", false);
  });
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
