$(document).ready(function () {

  var url = window.location.search;
  var searchBar;
  var searchBarPretty;
  var item = $("#item")
  var itemSub = $("#itemSub");
  var amazonBtn = $("#amazonBtn");

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
      success: function (data) {
        item.html(data[0].productName);
        itemSub.html("in " + data[0].productCategory[0] + " (!!category, needs fixed!!)");
        amazonBtn.attr("href", data[0].productLink);
        console.log(data);
        //console.log(data[0].productLink)
        //getCategoryName(data[0].productCategory[0])
      }
    });
  }

/*   function getCategoryName(categoryId) {
    $.get({
      url: `api/category?id=${categoryId}`,
      success: function (data1) {
        console.log("this is the new category  " + data1)
      }
    })
  } */
})