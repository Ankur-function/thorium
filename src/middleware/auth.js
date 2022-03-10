const jwt=require("jsonwebtoken")

const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token

    let token = req.headers["x-Auth-token"];

  if (!token) return res.send({ status: false, msg: "token must be present" });

  let decodedToken = jwt.verify(token, "functionup-thorium");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

next()
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