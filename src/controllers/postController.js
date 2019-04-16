module.exports = {
  // submitPost,
  getSuggestions
};
const request = require('request');

// const url = 'https://post-here.herokuapp.com/api/auth';

// async function submitPost(req, res) {
//   request(url, (error, response, body) => {
//     const json = JSON.parse(body);
//     const newArr = json.map(item => item);
//     res.status(200).json(newArr);
//   });
// }

const testObj = { rec_1: 'r/games', rec_2: 'r/movies', rec_3: 'r/tifu' };

async function getSuggestions(req, res) {
  const suggestions = testObj;
  try {
    return await res.status(200).json(suggestions);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Error retrieving suggestions', error });
  }
}
