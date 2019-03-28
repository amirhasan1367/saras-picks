$(document).ready(function() {

    var url = window.location.search;
    var searchBar;

    if (url.indexOf("?search_bar=") !== -1) {
        searchBar = url.split("=")[1];
        getProductData(searchBar);
        console.log("search bar console" + searchBar)
      }

      // Gets post data for a post if we're editing
  function getProductData(product) {
    $.get({
        url: `api/search?term=${product}`,
        success: function(data){
        console.log(data);
        }
    });
  }

})