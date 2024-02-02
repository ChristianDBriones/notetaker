const router = require('express').Router();

router.get('/', (req, res) => {
  console.log('hello')
  res.json('routehit')
});


module.exports = router;