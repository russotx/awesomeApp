module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("UserLinks", {

		topic: DataTypes.STRING
		notes: DataTypes.TEXT



	},

	{
     
      classMethods: {
        associate: function(models) {

          UserLinks.belongsTo(models.User, models.AllResources{
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }



	);

return UserRoadmap;


};