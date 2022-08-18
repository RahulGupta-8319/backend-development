const Author = require("../models/authorModel")

const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await Author.create(data)
    res.send({msg: savedData})
}

module.exports.createAuthor = createAuthor