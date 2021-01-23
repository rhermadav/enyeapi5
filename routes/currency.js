const router = require('express').Router();
const axios = require('axios');


router.route('/').get((req, res) => {
  axios.get('https://api.exchangeratesapi.io/latest')
    .then(response => console.log(response) )
    .catch(err => console.log(err));
});

router.route('/:base/:symbol').get((req, res) => {
  const {base , symbol } = req.params;
  axios.get(`https://api.exchangeratesapi.io/latest?base=${base}&currency=${symbol}`)
    .then(response => console.log(response) )
    .catch(err => console.log(err));
});

module.exports = router;