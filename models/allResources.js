module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("AllResources", {

		link: DataTypes.STRING
		difficulty: DataTypes.INTEGER
		popularity: DataTypes.INTEGER
		tags: DataTypes.STRING



	},


	


	);

return  AllResources;


};