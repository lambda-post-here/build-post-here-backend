const fetch = require('node-fetch');
const Posts = require('../database/helpers/post-helpers');

module.exports = {
  userPost
};
const url = 'http://testing-env.4wfmjpmztg.us-east-1.elasticbeanstalk.com/';

async function userPost(req, res) {
  const newPost = req.body;
  const userID = req.decoded.subject;
  const { title, body, image } = req.body;
  if (!title) {
    return await res.status(404).json({ message: 'You need a title' });
  } else {
    try {
      Posts.insert(newPost, userID);

      const response = await postData(url, newPost);
      console.log(response);
      res.status(200).send({ response, title, body, image });
    } catch (error) {
      return await res.status(500).json({ error });
    }
  }
}
const postData = async (url, newPost) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'post',
      body: JSON.stringify(newPost),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json =>
        resolve(
          json['top_five'].map(item => {
            return {
              rec: item[0],
              score: item[1]
            };
          })
        )
      );
  });
};
