module.exports = function(sequelize, DataTypes) {
  const UserRoadmap = sequelize.define("UserRoadmap", {
      // indicates which topic the associated resource is in
      topic: DataTypes.STRING, 
      // user defined notes about the resource, only for user
      notes: DataTypes.TEXT, 
      // the associated topic's position in the curriculum
      topicPos: DataTypes.INTEGER(10), 
      // A resource id matching a global resource
      resId: DataTypes.INTEGER(10) 
    },
    {
      classMethods: {
        associate: function(models) {
          UserRoadmap.belongsTo(models.User, 
            { foreignKey: 
              { allowNull: false } 
            });
        }
      }
    });
  return UserRoadmap;
};
