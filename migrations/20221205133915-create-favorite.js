"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("favorites", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      memeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "memes",
          key: "id",
        },
        onUpdate: "CASCADE", // when the id changes
        onDelete: "SET NULL",
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE", // when the id changes
        onDelete: "SET NULL",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("favorites");
  },
};
