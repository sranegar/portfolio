export function changePage(pageID) {
  //HOME
  if (pageID == "" || pageID == "home") {
    $.get(`pages/${pageID}/home.html`, function (data) {
      $("#app").html(data);
   
    });
  } else {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      $("#app").html(data);
    });
  }
}

 
 