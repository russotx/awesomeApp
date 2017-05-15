module.exports = function(sequelize, DataTypes) {
	const AllResources = sequelize.define("AllResources", {
		name: DataTypes.STRING,
    link: DataTypes.STRING,
		difficulty: DataTypes.INTEGER,
		popularity: DataTypes.INTEGER,
		tags: DataTypes.STRING
  });
  return  AllResources;
};