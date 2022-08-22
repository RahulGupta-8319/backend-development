const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createPub", publisherController.createPublisher)

router.get("/getpub", publisherController.getPublisher)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorAndpub", bookController.getBooksWithAuthorDetails)

 router.put('/update',bookController.updateBookCover )

 router.put("/inc", bookController.increaseValue)

module.exports = router;