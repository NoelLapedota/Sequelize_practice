module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn('courses', 'level', {
        type: Sequelize.STRING, 
        allowNull: true, 
      });
    } 
 
  };