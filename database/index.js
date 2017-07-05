var mysql = require('mysql');
var mysqlConfig = require('./config.js');

var connection = mysql.createConnection(mysqlConfig);

var getNextImages = function(lastImageId, limit, cb) {
  var query
  if (lastImageId) {
    query = `SELECT * FROM images WHERE id > ${lastImageId} LIMIT ${limit}`
  } else {
    query = `SELECT * FROM images ORDER BY id DESC LIMIT ${limit}`
  }
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

var getExistingFlickrIds = function(flickrIds) {
  return new Promise(function(resolve, reject) {
    // FOR TESTING DUPLICATES
    // flickrIds = flickrIds.concat(',34869566464,34869566784')
    var query = `SELECT flickr_id FROM images WHERE flickr_id in (${flickrIds})`;

    connection.query(query, (err,results,fields) => {
      if (err) {
        return reject(err)
      } else {
        console.log('Found images');
        var flickrIds = JSON.parse(JSON.stringify(results)).map((result) => { return result.flickr_id })
        console.log(flickrIds)

        resolve(flickrIds)
      }
    });
  })
}

var addImages = function(imageObjs) {
  // FOR TESTING DUPLICATES
  // imageObjs.push({ flickr_id: 34869566464 }, {flickr_id: 34869566784 })
  console.log('imageObjs')
  console.log(imageObjs)

  var newImageIds = imageObjs.map((image) => { return image.flickr_id}).join(',')
  var existingImageIds = getExistingFlickrIds(newImageIds)
    .then((existingImageIds) => {
      // console.log('in then')
      // console.log(existingImageIds)
      if (existingImageIds) {
        imageObjs = imageObjs.filter((image) => {
          if (existingImageIds.indexOf(image.flickr_id) < 0) {
            return image
          }
        })
      }
      return imageObjs;
    })
    .then((imageObjs) => {
      var query = `INSERT INTO images(flickr_id,flickr_url,date_taken,date_published,author) VALUES `;
      var subStatementsString = imageObjs.map((image) => {
        return `('${image.flickr_id}', '${image.flickr_url}', '${image.date_taken}', '${image.date_published}', '${image.author}')`;
      }).join(', ')
      query = query.concat(subStatementsString)

      new Promise(function(resolve, reject) {
        connection.query(query, (err,results,fields) => {
          if (err) {
            return reject(err)
          } else {
            resolve(console.log('Added new images to db'));
          }
        });
      })
    })
}

module.exports.getNextImages = getNextImages;
module.exports.getExistingFlickrIds = getExistingFlickrIds;
module.exports.addImages = addImages;