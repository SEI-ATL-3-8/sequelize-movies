'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('userMovies', [{
      movieId: 1,
      userId: 18,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 1,
      userId: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 1,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 1,
      userId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 1,
      userId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 1,
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 1,
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 2,
      userId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 2,
      userId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 2,
      userId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 2,
      userId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 2,
      userId: 28,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 2,
      userId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 2,
      userId: 29,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 3,
      userId: 18,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 3,
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 3,
      userId: 21,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 3,
      userId: 26,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 3,
      userId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 3,
      userId: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 3,
      userId: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 4,
      userId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 4,
      userId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 4,
      userId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 4,
      userId: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 4,
      userId: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 4,
      userId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 4,
      userId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 4,
      userId: 18,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movieId: 4,
      userId: 29,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
    
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
