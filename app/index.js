// Generated by CoffeeScript 1.4.0
var Mongolian, db, server, settings;

settings = require('node_settings_module');

Mongolian = require("mongolian");

server = new Mongolian(settings.get("mongodb").server, {
  log: {}
});

db = server.db(settings.get("mongodb").database);

exports.collection = function(collection) {
  return db.collection(collection);
};