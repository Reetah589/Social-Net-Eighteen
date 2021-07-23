const { Friend } = require('../models');

// find methods
const friendController = {
    getUserFriend(req, res) {
      Friend.find({})
        .then(dbFriendData => res.json(dbFriendData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },
  
    getFriendById({ params }, res) {
      Friend.findOne({ _id: params.id })
        .then(dbFriendData => {
          if (!dbFriendData) {
            res.status(404).json({ message: 'Friend not located with this id!' });
            return;
          }
          res.json(dbFriendData);
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },
  }

module.exports = friendController;