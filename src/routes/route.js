const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const authorController = require("../controllers/authorController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.post("/createAuthor", authorController.createAuthor  )

const Author = require("../models/authorModel")
const Book = require("../models/bookModel")

router.get("/find", async (req, res) =>{


//-------------------------1-----------------------------------//    

    // let author = await Author.findOne({name:"Chetan Bhagat"})
    // let id = author.author_id
    // console.log(id);
    // let books = await Book.find({author_id:id})
    // res.send(books)
//----------------------2---------------------------------//

    // let book = await Book.findOne({name:"Two states"})
    // let id = book.author_id
    // let author = await Author.findOne({author_id:id})
    // res.send(author)
//-----------------------3-------------------------------//

let book = await Book.find({price:{$gte:50,$lte:100}})
let arr =[]
book.map(item => {
    arr.push(item.author_id)
})
console.log(arr);
let authors = await Author.find({author_id:{$in:arr}}).select({author_name:1,_id:0})
res.send(authors)

})




// router.get("/getBooksData", BookController.getBooksData)

// router.post("/updateBooks", BookController.updateBooks)
// router.post("/deleteBooks", BookController.deleteBooks)

//MOMENT JS
const moment = require('moment');
router.get("/dateManipulations", function (req, res) {
    
    // const today = moment();
    // let x= today.add(10, "days")

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)
    
    const dateA = moment('01-01-1900', 'DD-MM-YYYY');
    const dateB = moment('01-01-2000', 'DD-MM-YYYY');

    let x= dateB.diff(dateA, "days")
    console.log(x)

    res.send({ msg: "all good"})
})

module.exports = router;