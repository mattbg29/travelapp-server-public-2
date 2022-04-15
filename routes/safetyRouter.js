//Thank you codingleft.com for presenting a very useful template that I was able to leverage for this!
//https://www.codingdeft.com/posts/react-authentication-mern-node-passport-express-mongo/

const express = require("express");
const safetyRouter = express.Router();
const Safety = require("../models/safetyIndex");
const passport = require("passport");
const jwt = require("jsonwebtoken");
var authenticate = require('../authenticate')

const {
  getToken,
  COOKIE_OPTIONS,
  getRefreshToken,
  verifyUser,
} = require("../authenticate");

safetyRouter.get("/", authenticate.verifyUser, (req, res, next) => {
    Safety.find({user: req.user._id})
      .then((dish) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(dish);    
      }, (err) => next(err))
      .catch((err) => next(err));
    })   

safetyRouter.post("/addData", authenticate.verifyUser, (req, res, next) => {
  // Verify that first name is not empty
    Safety.create({ user: req.user._id, name: req.body.name, ranking: req.body.ranking })
    .then((dish) => {
        console.log('Dish Created ', dish);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);    
    }, (err) => next(err))
    .catch((err) => next(err));
  })   

module.exports = safetyRouter;
