const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.send('All routes in here start with /api')
  })
  
  router.use('/users', require('./users'))

// example - route not used, but links to users.js file if existed where we write all users routes
//router.use('/users', require('./users')); 

router.use(function(req, res, next){
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})

module.exports = router;