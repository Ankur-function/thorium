const jwt=require("jsonwebtoken")

const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
   try{
    let token = req.headers["x-auth-token"];

  

  if (!token) return res.status(401).send({ status: false, msg: "token must be present" });

  let decodedToken = jwt.verify(token, "functionup-thorium");
  let user = decodedToken.userId;
  if (!decodedToken)
    return res.status(400).send({ status: false, msg: "token is invalid" });

   
next()
}
catch(error){
  console.log("This is the error:", error.message)
  res.status(500).send({message:"error", error:error.message})
}
}
module.exports.authenticate=authenticate


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
   //userId for which the request is made. In this case message to be posted.
    let userToBeModified = req.params.userId
   
  //userId for the logged-in user
    let userLoggedIn = decodedToken.userId

//userId comparision to check if the logged-in user is requesting for their own data
if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

next()
}
module.exports.authorise=authorise