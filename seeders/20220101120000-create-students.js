'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const students = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        points: 33,
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        points: 35,
      },
      {
        firstName: 'Alice',
        lastName: 'Johnson',
        email: 'alice.johnson@example.com',
        points: 42,
      },
      {
        firstName: 'Bob',
        lastName: 'Wilson',
        email: 'bob.wilson@example.com',
        points: 222,
      },
    ];

    await queryInterface.bulkInsert('Students', students, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Define the rollback logic if needed.
  },
};
