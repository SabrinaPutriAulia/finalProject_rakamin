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
      "Inventories",
      [
        {
          id_category: 1,
          inventory_name: "Product 1",
          stock: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_category: 2,
          inventory_name: "Product 2",
          stock: 15,
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
    await queryInterface.bulkDelete("Inventories", null, {});
  },
};
