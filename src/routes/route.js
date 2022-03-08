const mid= require("../src/middleware.js")
const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")


const UserController= require("../controllers/userController")
const productController= require("../controllers/productController")

const userModel= require("../models/userModel")
const productModel= require("../models/productModel")
const orderModel= require("../models/orderModel")


router.post("/createUser",mid,usercontroller.createuser)

router.post("/createProduct", productController.createProduct )

module.exports = router;


//MOMENT JS
/*const moment = require('moment');
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

   */