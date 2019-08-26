const Airtable = require('airtable');

let base = new Airtable({ apiKey: 'keyXdjNsLcCtpNcVT' }).base('app11pd9foOq6otfl');

module.exports = function (app) {

  app.get("/api/search", function (req, res) {

    const term = req.query.term;
    let results = []
    base('Products').select({
      view: 'Grid view'
    }).eachPage(function (records, fetchNextPage) {
      records.forEach(function (record) {
        record.get('Item') === term ? results.push({
          'productName': record.get('Name'),
          'productLink': record.get('Link'),
          'productCategory': record.get('CategoryText'),
          'productWhy': record.get('Why'),
          'productPhoto': record.get('Photos')
        }) : null

      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();

    }, function done(err) {
      if (err) { console.log(err); return; }
      res.json(results);

    })
  });



  app.get("/api/categories", function (req, res) {

    let categories = [];
    base('Categories').select({
      view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function (record) {
        console.log('Retrieved', record.get('Name'));
        categories.push({
          'categoriesName' : record.get('Name')
        })
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();

    }, function done(err) {
      if (err) { console.error(err); return; }
      res.json(categories);
    });
  })

  app.get("/api/products", function (req, res) {

    let products = [];
    base('Products').select({
      view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function (record) {
        console.log('Retrieved', record.get('Name'));
        products.push({
          'productsName' : record.get('Name'),
          'productsItem' : record.get('Item')
        })
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();

    }, function done(err) {
      if (err) { console.error(err); return; }
      res.json(products);
    });
  })

};
