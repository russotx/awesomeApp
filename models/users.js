module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", 
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [2] }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      rank: {
        type: DataTypes.INTEGER(10),
        allowNull: false
      }
    },
    {
      classMethods: {
        associate: function(models) {
          User.hasMany(models.UserRoadmap, { onDelete: "cascade" });
        }
      }
    });
  return User;
};
