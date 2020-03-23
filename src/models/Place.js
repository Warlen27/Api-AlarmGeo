const { Model, DataTypes } = require('sequelize');

class Place extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            thumbnail: DataTypes.STRING,
            latitude: DataTypes.FLOAT,
            longitude: DataTypes.FLOAT,
            thumbnail_url: {
                type: DataTypes.VIRTUAL,
                get() {
                  return `http://localhost:3333/files/${this.thumbnail}`;
                },
              }, 
        },{
            sequelize
        })
    }
    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
}

module.exports = Place;