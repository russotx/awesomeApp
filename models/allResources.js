module.exports = function(sequelize, DataTypes) {
	const AllResources = sequelize.define("AllResources", {
		name: { 
      type: DataTypes.STRING,
      validate: { len: [3] }
    },
    link: { 
      type: DataTypes.STRING,
      validate: { isUrl: true }
    },
		difficulty: DataTypes.INTEGER(2),
		popularity: DataTypes.INTEGER(2),
		tags: {
      type: DataTypes.STRING,
      validate: { len: [3] }
    }
  });
  return  AllResources;
};

