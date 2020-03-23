const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      avatar: DataTypes.STRING,
      avatar_url: {
        type: DataTypes.VIRTUAL,
        get() {
          return `http://localhost:3333/files/${this.avatar || 'placeholder.png'}`;
        },
      }, 
    }, {
      sequelize
    })
    // User.sync({force: true})
    
  }
  static associate(models){
    this.hasMany(models.Place, { foreignKey: 'user_id', as: 'places' });
}
  
  }
 


module.exports = User;