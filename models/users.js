module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {

            name: {
                type: DataTypes.STRING
                allowNull: false
            },
            email: {
                type: DataTypes.STRING
                allowNull: false
            },
            password: {
                type: DataTypes.STRING
                allowNull: false
            },
            rank: {
                type: DataTypes.INTEGER
                allowNull: false
            },

        },

        {

            classMethods: {
                associate: function(models) {

                    User.hasMany(models.UserRoadmap, {
                        onDelete: "cascade"
                    });
                }
            }

        }

    );

    return User;


};
