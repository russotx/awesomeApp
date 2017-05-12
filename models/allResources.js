module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("AllResources", {

		link: DataTypes.STRING
		difficulty: DataTypes.INTEGER
		popularity: DataTypes.INTEGER
		tags: DataTypes.STRING



	},


	{

		classMethods: {
        	associate: function(models) {

          	AllResources.hasMany(models.UserLinks, models.Tags{
            	onDelete: "cascade"
          });
        }
      }

  	}


	);

return  AllResources;


};