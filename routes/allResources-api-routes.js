const db = require("../models");

module.exports = function(app) {
  //gets all resources in the resources table
  app.get("/api/allResources", function(req, res) {
    db.AllResources.findAll().then(function(dbAllResources) {
      res.json(dbAllResources);
    });
  });

  app.post("/api/allResources", function(req, res) {
    db.AllResources.create(req.body).then(function(dbAllResources) {
      res.json(dbAllResources);
    });
  });
};