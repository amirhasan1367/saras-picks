$(document).ready(function() {

    var url = window.location.search;
    var searchBar;
    var searchBarPretty;
    var retDiv = $("#retrievedDiv")

    if (url.indexOf("?search_bar=") !== -1) {
        searchBar = url.split("=")[1];
        searchBar = searchBar.replace(/[^a-zA-Z0-9 ]/g, " ")
        searchBarPretty = searchBar.replace(/[^a-zA-Z ]/g, "")
        getProductData(searchBarPretty);

      }

      // Gets post data for a post if we're editing
  function getProductData(product) {
    $.get({
        url: `api/search?term=${product}`,
        success: function(data){
        retDiv.html(
        "<p> Here is the best <strong> " +product +"</strong> </p>" +
        "<p> Product Name: " +data[0].productName +"</p>" +
        "<p> Category: "+data[0].productCategory[0]+"</p>")
        console.log(data);
        }
    });
  }

})