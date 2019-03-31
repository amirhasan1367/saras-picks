$(document).ready(function () {
  console.log('hello there!');

  var useRetrievedData = function (data) {
    $("#retrievedData").html("<p>Product is " + data[0].productName + "</p>")
  }

  $(".btn_search").on("click", function (e) {

    e.preventDefault();
    var searchBar = $("#search-bar").val();
    // console.log(searchBar);

    $.get({
      url: `api/search?term=${searchBar}`,
      success: function (data) {
        console.log(data);
        window.location.href = "/product?search_bar=" + searchBar;
      }
    }).then(function () {
      //window.location.href = "http://localhost:5000/product";
      console.log("you're redirected to the product page");
      console.log(data);
      useRetrievedData();
    })
  });

  var retrieveCategories = function () {
    $.get({
      url: `api/categories`,
      success: function (data) {
        var i;
        for (i = 0; i < data.length; i++) {
          console.log("categories are :  " + data[i].categoriesName)
        }

      }
    })
  }

  retrieveCategories();
});