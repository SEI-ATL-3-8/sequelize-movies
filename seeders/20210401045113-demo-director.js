'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('directors', [
      {
      name: 'Alejandro G. Iñárritu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Damien Chazelle',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dan Gilroy',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'James Gunn',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'George Miller',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Alex Garland',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Denis Villeneuve',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Yorgos Lanthimos',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Stanley Kubrick',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Neill Blomkamp',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Francis Ford Coppola',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Woody Allen',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Paul Thomas Anderson',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Michael Powell',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Martin Scorsese',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Quentin Tarantino',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Joel Coen',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sam Mendes',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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
