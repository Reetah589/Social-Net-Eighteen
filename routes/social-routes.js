const router = require('express').Router();

const {
    getAllFriend,
    getFriendById,
    createFriend,
    updateFriend,
    deleteFriend
  } = require('../../controllers/social-controller');

// GET all and POST
router
  .route('/')
  .get()
  .post();

// GET, PUT, and DELETE 
router
  .route('/:id')
  .get()
  .put()
  .delete();

module.exports = router;