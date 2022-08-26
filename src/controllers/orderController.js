const orderModel= require("../models/orderModel")
const UserModel= require("../models/userModel")
const productModel= require("../models/productModel")
const userModel = require("../models/userModel")

const createOrder = async function(req, res){
    const data = req.body
    let user_Id = req.body.userId
    let product_Id = req.body.productId
   
    //validation
    const validUSer = await userModel.findById(data.userId)
    if(!validUSer){
        res.send("user id is not valid")
    }
    const validProduct = await productModel.findById(data.productId)
    if(!validProduct){
        res.send("product id is not valid")
    }

    let headerValue = req.headers.isfreeappuser

    if(headerValue == "true"){
        req.body['amount'] = 0
        req.body['isFreeAppUser'] = headerValue
        req.body.isfreeappuser = headerValue

        const data = new orderModel(req.body)
        let result = await data.save()
        res.send({status:true, data: result})
    }else if(headerValue == "false"){
        let user = await userModel.findById(user_Id)
        let product = await productModel.findById(product_Id)

        if(user.balance > product.price ){
              req.body['amount'] = product.price
              req.body['isFreeAppUser'] = headerValue
              let remain = user.balance - product.price

              const data = new orderModel(req.body)
              let result = await data.save()
              await userModel.updateOne({_id:user_Id},{ $set : { balance : remain}})
              res.send({data:result})
 

        }else{
            return res.send({msg:"money is not enough"})
        }
    }
 
}

const getOrder = async function(req, res){
    let allusers = await orderModel
    .find()
    res.send({msg:allusers})
}

module.exports.createOrder = createOrder
module.exports.getOrder = getOrder