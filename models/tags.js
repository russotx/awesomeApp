module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("Tags", {

		tagName: DataTypes.STRING
		count: DataTypes.INTEGER


	},

	{

	classMethods: {
        associate: function(models) {

          Tags.belongsTo(models.AllResources,{
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }


	);

return Tags;


};