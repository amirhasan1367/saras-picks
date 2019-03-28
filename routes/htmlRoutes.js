var path = require("path");

module.exports = function(app) {


  // Regular html rendered routes

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  app.get("/product", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/product.html"));
  });
};




