module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('places', 'user_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('places', 'user_id');
  },
};
