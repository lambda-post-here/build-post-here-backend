const fetch = require('node-fetch');
module.exports = {
  userPost,
  testPost
};

const testObj = { rec_1: 'r/games', rec_2: 'r/movies', rec_3: 'r/tifu' };

async function userPost(req, res) {
  const { title, body } = req.body;
  if (!title || !body) {
    return await res
      .status(404)
      .json({ message: 'You need a title and a post' });
  }
  try {
    res.status(200).send({ testObj, title, body });
  } catch (error) {
    return await res.status(500).json({ error });
  }
}

async function testPost(req, res) {
  res.status(200).json(testObj);
}

// const url = 'http://localhost:5000/api/post';
// const postData = async url => {
//   try {
//     const response = await fetch(url, {
//       method: 'post',
//       body: JSON.stringify(body),
//       headers: { 'Content-Type': 'application/json' }
//     })
//       .then(res => res.json(response))
//       .then(json => console.log(json));
//   } catch (error) {
//     return await res
//       .status(500)
//       .json({ error: 'Error retrieving suggestions', error });
//   }
// };
