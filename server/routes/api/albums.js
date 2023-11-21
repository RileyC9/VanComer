const express = require('express');
const router = express.Router();
const users = require('../../Users');
const jobs = require('../../jobs');
// const albums = require('../../Albums');
// const uuid = require('uuid');

/**
 * @route GET api/albums
 * @desc Retrives all albums
 **/
router.get('/', (req, res) => res.json(albums));

module.exports = router;