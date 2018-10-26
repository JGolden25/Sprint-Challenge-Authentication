const axios = require('axios');
const jwt = require('jsonwebtoken');
const jwtKey = require('../_secrets/keys').jwtKey;
const bcrypt = require('bcryptjs');

const db = require('../database/dbConfig.js')
const { authenticate } = require('./middlewares');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(request, response) {
  const credentials = request.body;

  const hash = bcrypt.hashSync(credentials.password, 15);
  credentials.password = hash;

  db('users')
  .insert(credentials)
  .then(ids => {
    const id = ids[0];
    const token = jwt.sign({ username: credentials.username }, jwtKey, { expiresIn: '10m' });
    response.status(201).json({ newUser: id, token  })
  })
  .catch( error => {
    response.status(500).json(error);
  })
}

function login(req, res) {
  const credentials = req.body;

  db('users')
  .where({ username: credentials.username })
  .then(user => {
    user = user[0]
    if (user) {
      const token = jwt.sign({ username: credentials.username }, jwtKey, { expiresIn: '10m' });
      res.status(200).json({ welcome: user, token })
    } else {
      res.status(401).json({ notAuthorized: "Unable to find a user with the provided credentials." })
    }
  })
  .catch ( error => {
    res.status(500).json(error)
  })
}

function getJokes(request, response) {
  axios
    .get(
      'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
    )
    .then(response => {
      response.status(200).json(response.data);
    })
    .catch(err => {
      response.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
