const { Schema, model } = require('mongoose');

const FriendSchema = new Schema({
    friendCount: {
      type: String
    },
    createdBy: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    size: {
      type: String,
      default: 'Friend Count'
    },
    friends: []
  });


const Friend = model('Friend', FriendSchema);

module.exports = Friend;
