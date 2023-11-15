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
      "Customers",
      [
        {
          name: "Terasa",
          email: "terasabeauty@gmail.com",
          no_handphone: "085246789341",
          address: "Jalan Pedurungan Kidul 32, Semarang",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Larissa",
          email: "larissaskin@gmail.com",
          no_handphone: "081356789390",
          address: "Jalan Dr Sudarso 2, Semarang",
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
    await queryInterface.bulkDelete("Customers", null, {});
  },
};
