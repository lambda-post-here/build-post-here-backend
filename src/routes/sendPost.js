const router = require('express').Router();
const request = require('request');

const url = 'https://post-here.herokuapp.com/api/auth';

router.get('/post', (req, res) => {
  request(url, (error, response, body) => {
    const json = JSON.parse(body);
    const newArr = json.map(item => item);
    res.status(200).json(newArr);
  });
});
module.exports = router;
