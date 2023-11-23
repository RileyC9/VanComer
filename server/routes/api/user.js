const express = require('express');
const router = express.Router();
const users = require('../../Users');
let currentUserId = 6;

/**
 * @route GET api/user/
 * @desc Retrives the user's role
 **/
router.get('/', (req, res) => {
  // for userFound:
  // return the user's detail. Or
  // return {role:"null"} object if user is not found
  // AND THEN RETURN userFound.
  console.log(req.body.email);
  const userFound = users.find((user) => {
    if (user.email === req.body.email && user.password === req.body.password) {
      return res.json(user);
    }else {
      return res.json({role: "null"}); // ??????????
    }
  });
  return userFound;
});
/**
 * @route POST api/jobs/
 * @desc Creates a new user
 **/
router.post('/', (req,res) => {
  // Check if email already registered
  console.log(req.body.email);
  if (users.find((user) => user.email === req.body.email)) {
    return res.json({result: "failed", reason:"email existed."});
  }
  // check if the req body contain areaOfInterest
  // if yes, it is a job seeker
  // else it is a client
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
    users.push(newUser);
  }
  currentUserId++;
  return res.json({result: "success"});
})

module.exports = router;