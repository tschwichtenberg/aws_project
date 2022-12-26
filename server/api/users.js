const express = require('express')
const router = express.Router()
const { User } = require('../db')


router.get('/', async (req, res, next) => {
  try {
    res.send(await User.findAll())
  }
  catch (err) {
    console.log(err);
  }
})
module.exports = router;