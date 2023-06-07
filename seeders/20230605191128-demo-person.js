'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('People', [{
      firstName: 'Anderson',
      secondName: 'Elian',
      firstLastName: 'Rubio',
      secondLastName: 'Parrado',
      email: 'elianrubio98018@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('People', null, {});
  }
};
