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
      "Transactions",
      [
        {
          id_inventory: 1,
          id_admin: 1,
          id_supplier: 1,
          id_customer: 1,
          qty: 10,
          date: new Date(),
          in_out: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_inventory: 2,
          id_admin: 2,
          id_supplier: 2,
          id_customer: 2,
          qty: 15,
          date: new Date(),
          in_out: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Tambahkan data lainnya sesuai kebutuhan
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
    await queryInterface.bulkDelete("Transactions", null, {});
  },
};
