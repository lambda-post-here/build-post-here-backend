const fetch = require('node-fetch');
module.exports = {
  userPost
};
const url =
  'http://buildweekredditpredict-env.zfm3nfznwp.us-east-1.elasticbeanstalk.com/';

const testPost = {
  title: 'new title for testing',
  body: 'This is my post to be analyzed',
  image: 'no image'
};

async function userPost(req, res) {
  const { title, body, image } = req.body;
  if (!title) {
    return await res.status(404).json({ message: 'You need a title' });
  } else {
    try {
      const response = await postData(url);
      console.log(response);
      res.status(200).send({ response, title, body, image });
    } catch (error) {
      return await res.status(500).json({ error });
    }
  }
}
const postData = async url => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'post',
      body: JSON.stringify(testPost),
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
