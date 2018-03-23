const jwt = require('jsonwebtoken');
const { mysecret } = require('../../config');
const User = require('../models/userModels');

const login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) res.status(400).json({ error: "Please provide a username and password."})
  User.findOne({ username })
    .then(user => {
      if (user) {
        user.checkPassword(user, password)
        .then(isMatch => {
          if(isMatch) {
            const token = jwt.sign(username, mysecret);
            res.status(200).json({ token });;
          }
          else res.status(422).json({error: 'Wrong Password or Username'})
        })
      } else res.status(422).json({error: 'Wrong Password or Username'})
    })
    .catch(err => {
      res.status(500).json({ error: err });
    })
};

module.exports = {
  login
};
