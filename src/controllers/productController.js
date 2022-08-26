const productModel= require("../models/productModel")

const createProduct = async function(req, res){
    const data = req.body
    const userCreated = await productModel.create(data)
    res.send({msg:userCreated})
}

const getProduct = async function(req, res){
    let allusers = await productModel.find()
    res.send({msg:allusers})
}

module.exports.createProduct = createProduct
module.exports.getProduct = getProduct