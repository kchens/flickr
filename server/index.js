var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var db = require('../database');
var axios = require('axios');

const SRC_FLICKR = 'flickr'
const SRC_PRIVATE = 'private'

var app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/v1/images', function (req, res) {
  if ( req.query.src === SRC_FLICKR ) {
    // 1. fetch filckr api
    console.log('in route')
    var flckrFeedResult = axios.get('https://api.flickr.com/services/feeds/photos_public.gne?format=json')
      .then((res) => {
        var jsonFlickrString = res.data
        jsonFlickrString = jsonFlickrString.substring("jsonFlickrFeed(".length, jsonFlickrString.length-1);
        var json = JSON.parse(jsonFlickrString)
      // 2. parse the imageId
        var parsedData = json.items.map((image) => {
          var imageObj = {}
          imageObj.flickr_id = parseInt(/\d{11}/.exec(image.link)[0])
          imageObj.flickr_url = image.media.m
          imageObj.date_taken = image.date_taken
          imageObj.date_published = Date.parse(image.published)
          imageObj.author = image.author.substring('nobody@flickr.com ("'.length, image.author.length - 2 )
          return imageObj
        })

        db.addImages(parsedData)
        // return parsedData
      }).then(() => {
        var lastImageId = null, limit = 10
        db.getNextImages(lastImageId, limit, (err, data) => {
          if (err) {
            res.status(501).send(err);
          } else {
            res.status(200).send(data);
          }
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  if ( req.query.src === SRC_PRIVATE ) {
    console.log('in private')
    db.getNextImages(req.query.lastImageId, req.query.limit, (err, data) => {
      if (err) {
        res.status(501).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  }
});

app.get('/v1/favorites', function(req, res) {
  console.log('in /v1/favorites')
  db.getFavorites((err, data) => {
    if (err) {
      res.status(501).send(err);
    } else {
      res.status(200).send(data);
    }
  });
})

app.post('/v1/favorites', function(req, res) {
  console.log('in /v1/favorites')
  console.log(req.body)
  db.addFavorite(req.body, (err) => {
    if (err) {
      res.status(501).send(false);
    } else {
      res.status(200).send(true);
    }
  });
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
