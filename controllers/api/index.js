const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

// import the model routes 
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);





module.exports = router;