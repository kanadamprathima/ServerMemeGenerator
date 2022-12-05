"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "memes",
      [
        {
          imgUrl: "https://www.probytes.net/wp-content/uploads/2018/01/5-1.png",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imgUrl:
            "https://i.pinimg.com/originals/01/c6/a5/01c6a53abda6026dd3c65fe0ef5b9f08.jpg",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imgUrl:
            "https://www.meme-arsenal.com/memes/18faa9e7afa29676e1b35dbdf7547a3b.jpg",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imgUrl: "https://tsh.io/wp-content/uploads/2019/12/react-meme1_.png",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imgUrl: "https://miro.medium.com/max/1400/0*ZtK2M41W6a3Avzbk.png",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imgUrl: "https://miro.medium.com/max/1280/0*Vi7dVWLLqDhCsEkW",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     *
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("memes", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     *
     */
  },
};
