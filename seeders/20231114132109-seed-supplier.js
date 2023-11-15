"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Suppliers",
      [
        {
          name: "Scarlet Official",
          email: "scarletofficial@gmail.com",
          no_handphone: "082256789341",
          address: "Jalan Putri Emas 22, Jakarta",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Implora Store",
          email: "implorastore@gmail.com",
          no_handphone: "081356789390",
          address: "Jalan Jendral Sudirman 7, Jakarta",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Suppliers", null, {});
  },
};
