var mysql = require('mysql');
var mysqlConfig = require('./config.js');

var connection = mysql.createConnection(mysqlConfig);

var getNextImages = function(lastImageId, limit, cb) {
  // var query = `SELECT * FROM images WHERE id < '${lastImageId }' LIMIT '${limit}'`
  var query = `SELECT * FROM images LIMIT ${limit}`
  console.log(query)
  connection.query(query, (err,results,fields) => {
    console.log(results)
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
}

var addImage = function(imageObj, cb) {
  console.log('query')
  var query = `INSERT INTO images(flickr_id,flickr_url,date_taken,date_published,author) VALUES('${imageObj.flickr_id}', '${imageObj.flickr_url}', '${imageObj.date_taken}', '${imageObj.date_published}', '${imageObj.author}')`;

  console.log(query)
  connection.query(query, (err,results,fields) => {
    if (err) {
      cb(err, false);
    } else {
      console.log('Added new image to db');
      cb(null, true);
    }
  });
}

module.exports.getNextImages = getNextImages;
module.exports.addImage = addImage;