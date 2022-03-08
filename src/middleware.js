
const middleware1= async function(req,res,next) {

let contentTypeHeader = req.headers["isFreeAppUser"]
  if(!contentTypeHeader){
      console.log("request missing a mandatory header")
      res.send("error")
  }
  next();
}

module.exports.middleware1=middleware1