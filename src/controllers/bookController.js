const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook = async function (req, res) {
    // let book = req.body
    // let bookCreated = await bookModel.create(book)
    // res.send({data: bookCreated})

    //-------------------------------------------------------------//

    let authorId = req.body.author
    let publisherId = req.body.publisher

    if (!authorId) {

        return res.send({ msg: "write author id" })
    }

    let present = await authorModel.findById(authorId)
    if (present) {
        if (!publisherId) {
            return res.send({ msg: "plz provide publisherId" })
        }
        let publisher = await publisherModel.findById(publisherId)
        if (publisher) {

            let book = req.body
            let bookCreated = await bookModel.create(book)
            res.send({ data: bookCreated })

        } else {
            return res.send({ msg: "publisher id is not present" })
        }

    }
    else {
        return res.send({ msg: "author id is not present " })
    }

}

const getBooksData = async function (req, res) {
    let books = await bookModel.find()
    res.send({ data: books })
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author publisher')
    res.send({ data: specificBook })

}

// const updateBookCover = async function (req, res) {
//     let cover = await bookModel.updateMany({ $or: [{ publisher: "Penguine" }, { publisher: "HarperCollins" }] }, { $set: { isHardCover: false } }, { new: true })
//     res.send({ data: cover })
// }

// const increaseValue = async function (req, res) {
//     let updatedValue = await bookModel.updateMany({ ratings: { $gt: 3 } }, { $inc: { prices: 10 } }, { new: true })
//     res.send({ data: updatedValue })
// }

//----------------------------------------------------------------------------------------------------------------------------//

const updateBookCover = async function(req, res){
        let cover = await  publisherModel.find({ $or : [{ name : "penguine"}, { name : "HarperCollins"}]}).select({ _id : 1})
        let update = await bookModel.updateMany({ publisher:cover}, { $set : { isHardCover: true  }})
        res.send({data:update})

}

// b) For the books written by authors having a rating greater than 3.5,
//  update the books price by 10 (For eg if old price for such a book is 50, new will be 60) 

const increaseValue = async function( req, res){
    let author1 = await authorModel.find({ rating : {$gt : 3.5}}).select({_id:1})
    let update = await bookModel.updateMany({ author : author1 }, { $inc : { price : 10 }})
    res.send({data : update })

}

module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updateBookCover = updateBookCover
module.exports.increaseValue = increaseValue   
