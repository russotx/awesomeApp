const bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", 
    {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
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
        allowNull: true
      }
    },
    {
      classMethods: {
        associate: function(models) {
          User.hasMany(models.UserRoadmap, { onDelete: "cascade" });
        }
      },
      // Creating a custom method for our User model. This will check if an unhashed password entered by
      // The user can be compared to the hashed password stored in our database
      instanceMethods: {
        validPassword: function(password) {
          return bcrypt.compareSync(password, this.password);
        }
      },
      // Hooks are automatic methods that run during various phases of the User Model lifecycle
      // In this case, before a User is created, we will automatically hash their password
      hooks: {
        beforeCreate: function(user, options, cb) {
          user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
          cb(null, options);
        }
      }
    });
  return User;
};
