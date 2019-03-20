$(document).ready(function () {
  console.log('hello there!');


  $(".btn_search").on("click", function(e) {

    e.preventDefault();
    var searchBar = $("#search-bar").val();
    // console.log(searchBar);

    $.get({
      url: `api/search?term=${searchBar}`,
      success: function(data){
        console.log(data)
      }
    })
  });
});