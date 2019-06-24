const express = require('express');
const config = require('./config/config');
const glob = require('glob');
const mongoose = require('mongoose');


mongoose.connect(config.db, { server: { auto_reconnect: true } }, (err, db) => {
  if (err) {
    console.log("connection " + err.message + "");
  } else {
    console.log("successful DB connection");

    // mongoose.connection.db.collection("providers", (err, collection) => {
    //   collection.find({}).toArray(function (err, data) {
    //     console.log(data); // it will print your collection data
    //   })
    // });
  }
});

const models = glob.sync(config.root + '/app/models/*.js');
models.forEach((model) => {
  require(model);
});
const app = express();

module.exports = require('./config/express')(app, config);

app.listen(config.port, () => {
  console.log('Express server listening on port ' + config.port);
});
