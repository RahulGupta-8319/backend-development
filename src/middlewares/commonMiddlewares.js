


const check =  function(req, res, next){
    let data = req.body
    let head = req.headers.isfreeappuser
   if(!head){
    return res.send({msg:"header in mandatory"})
   }else{
    req["headerValue"] = head
    next()
   }
}

module.exports.check = check
