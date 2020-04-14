const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const users = require("./users.js");

//
// Item
//

const User = users.model;
const validUser = users.valid;

// This is the schema for a ticket
const itemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  id: Number,
  productId: Number,
  name: String,
  image: String,
  price: String,
});

const Item = mongoose.model("Item", itemSchema);

// get Item -- will list cart items that a user has
router.get("/a", validUser, async (req, res) => {
  let items = [];
  try {
    items = await Item.find({
      user: req.user,
    }).sort({
      created: -1,
    });
    return res.send({
      items: items,
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// add item
router.post("/", validUser, async (req, res) => {
  const item = new Item({
    user: req.user,
    id: req.body.id,
    productId: req.body.productId,
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
  });
  try {
    await item.save();
    return res.send({
      item: item,
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// delete
router.delete("/:id", validUser, async (req, res) => {
  let items = [];
  try {
    items = await Item.find({
      user: req.user,
    }).sort({
      created: -1,
    });

    let currentItem = "temp";
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === Number(req.params.id)) {
        currentItem = items[i];
      }
    }

    await Item.findByIdAndRemove(currentItem._id, function (err, val) {
      if (err) res.json(err);
      else res.json("sucessfully removed");
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// edit a cart
router.put("/:id", validUser, async (req, res) => {
  // can only do this if an administrator
  if (!req.body.status || !req.body.response) {
    return res.status(400).send({
      message: "status and response are required",
    });
  }
  try {
    item = await Item.findOne({
      _id: req.params.id,
    });
    item.status = req.body.status;
    item.response = req.body.response;
    await item.save();
    return res.send({
      item: item,
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});
module.exports = {
  routes: router,
};
