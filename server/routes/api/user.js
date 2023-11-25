const express = require('express');
const router = express.Router();
const users = require('../../Users');
let currentUserId = 6;


/**
 * @route POST api/jobs/
 * @desc based on request action property, return a user or create a user
 **/
router.post('/', (req,res) => {
  
  if (req.body.action == "login") {
    let userFound = {role:"null"};
    userFound = users.find((user) => {
    if (user.email === req.body.email && user.password === req.body.password) {
      return res.json(user);
    }});
    return userFound;
  } else {
    // Check if email already registered
    if (users.find((user) => user.email === req.body.email)) {
      return res.json({result: "failed", reason:"email existed."});
    }
    // check if the req body contain areaOfInterest
    // if yes, it is a job seeker
    // else it is a client
    let returnData = {};
    if (req.body.areaOfInterest) {
    const newUser = {
      clientId: currentUserId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      role: req.body.role,
      email: req.body.email,
      password: req.body.password,
      areaOfInterest: req.body.areaOfInterest,
    };
    returnData = {
      result: "success",
      clientId: currentUserId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      role: req.body.role,
      email: req.body.email,
      password: req.body.password,
      areaOfInterest: req.body.areaOfInterest,
    };
    users.push(newUser);
  } else {
    const newUser = {
      clientId: currentUserId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      role: req.body.role,
      email: req.body.email,
      password: req.body.password,
    };
    returnData = {
      result: "success",
      clientId: currentUserId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      role: req.body.role,
      email: req.body.email,
      password: req.body.password,
    };
    console.log(returnData);
    users.push(newUser);
  }
  // increment id for unique userIds
    currentUserId++;
    return res.json(returnData);
  }
})

module.exports = router;