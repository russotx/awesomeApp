var db = require("../models");

module.exports = function(app) {

//gets UserRoadmap for a User
  app.get("/api/userRoadmap", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }

    db.Post.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbUserRoadmap) {
      res.json(dbUserRoadmap);
    });
  });
	

//Adds new links to roadmap
   app.post("/api/userRoadmap", function(req, res) {
    db.UserRoadmap.create(req.body).then(function(dbUserRoadmap) {
      res.json(dbUserRoadmap);
    });
  });


//deletes link from roadmap
  app.delete("/api/userRoadmap/:id", function(req, res) {
    db.UserRoadmap.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUserRoadmap) {
      res.json(dbUserRoadmap);
    });
  });





};