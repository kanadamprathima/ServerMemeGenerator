const express = require("express");
const Meme = require("../models").meme;
const User = require("../models/").user;
const Favorite = require("../models").favorite;
const authMiddleware = require("../auth/middleware");

const { Router } = express;

const router = new Router();
//get all memes
router.get("/", async (request, response) => {
  const getMemes = await Meme.findAll({ include: User });
  console.log("all memes", getMemes);
  response.send(getMemes);
});
//Post a new meme
router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const userId = req.user.id;
    console.log("object", userId);
    const imgUrl = req.body.imgUrl;
    if (!imgUrl) {
      res.status(400).send("Must provide an image address");
    } else {
      const newMeme = await Meme.create({ imgUrl, userId: req.user.id });
      res.json(newMeme);

      return res.status(201).send({ message: "New Meme created", newMeme });
    }
  } catch (e) {
    next(e);
  }
});
//add favorite
router.post("/fav", authMiddleware, async (req, res, next) => {
  try {
    const userId = req.user.id;
    const memeId = req.body.memeId;
    console.log("memeID &userId", memeId, userId);
    const newFav = await Favorite.create({
      memeId,
      userId,
    });
    console.log("new favorite", newFav);
    res.json(newFav);
  } catch (e) {
    next(e.message);
  }
});
//delete
router.delete("/fav/:id", authMiddleware, async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const idToDelete = await Favorite.findByPk(id);
    if (!idToDelete) {
      res.status(404).send("id not found");
    } else {
      const deleted = await idToDelete.destroy();
      res.json(deleted);
    }
  } catch (e) {
    next(e.message);
  }
});
//fetch favorite
router.get("/:id", async (request, response) => {
  const { id } = request.params;
  const getFavs = await Favorite.findAll({ where: { userId: id } });
  console.log("all favs", getFavs);
  response.send(getFavs);
});

module.exports = router;
