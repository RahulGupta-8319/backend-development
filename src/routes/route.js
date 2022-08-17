const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

router.get("/getBooksData", BookController.getBooksData  )

router.post("/allBooksList", BookController.allBooksList  )

router.post("/yearDetails", BookController.yearDetails  )

router.post("/particularBooks", BookController.particularBooks  )

router.post("/priceDetails", BookController.priceDetails  )

module.exports = router;