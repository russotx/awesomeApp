module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("UserRoadmap", {

            topic: DataTypes.STRING
            notes: DataTypes.TEXT



        },

        {

            classMethods: {
                associate: function(models) {

                    UserRoadmap.belongsTo(models.User, {
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
