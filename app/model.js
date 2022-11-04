export function changePage(pageID, subPage, callback) {
  //HOME
  if (pageID == "" || pageID == "home") {
    $.get(`pages/${pageID}/home.html`, function (data) {
      // $("#open").html(data);
      $("html, body").animate({
        scrollTop: 0
      }, 200)
      
    });
 
  // } else if (pageID == "work") {
  //   $.get(`pages/${pageID}/${pageID}.html`, function (data) {
  //     $("#app").html(data);
  //    $("#nav-bar").css("display", "flex");
           
  //   });

  // } else if (pageID == "about") {
  //   $.get(`pages/${pageID}/${pageID}.html`, function (data) {
  //     $("#app").html(data);
  //    $("#nav-bar").css("display", "flex");
             
  //   });
     
         
       
  } else {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      $("#app").html(data);
      $("#nav-bar").css("display", "flex");
      
    });
  }
}

 
 