'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'Joel',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dexter',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ryan',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Pete',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
