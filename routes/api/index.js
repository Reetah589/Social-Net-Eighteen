const router = require('express').Router();
const friendRoutes = require('./social-routes');

router.use('/friends', friendRoutes);

module.exports = router;