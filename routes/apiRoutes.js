const Airtable = require('airtable');

let base = new Airtable({apiKey: 'keyXdjNsLcCtpNcVT'}).base('app11pd9foOq6otfl');

module.exports = function (app) {

  app.get("/api/search", function(req, res){

    const term = req.query.term;
    let results = []
    base('Products').select({
      view:  'Grid view'
    }).eachPage(function(records, fetchNextPage) {
      records.forEach(function(record) {
        record.get('Item') === term ? results.push({
          'productName': record.get('Name'),
          'productLink' : record.get('Link')
        }) : null
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

    }, function done(err) {
      if (err) {console.log(err); return;}
      res.json(results);
    })
  })




};
