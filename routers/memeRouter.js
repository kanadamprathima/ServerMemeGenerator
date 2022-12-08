const express = require("express");
const Meme = require("../models").meme;
const User = require("../models/").user;
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
    const imgUrl = req.body.imgUrl;
    if (!imgUrl) {
      res.status(400).send("Must provide an image address");
    } else {
      const newMeme = await Meme.create({ imgUrl, uesrId: req.user.id });
      res.json(newMeme);
      return res.status(201).send({ message: "New Meme created", newMeme });
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
