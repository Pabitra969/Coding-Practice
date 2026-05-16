const express = require('express');
const { registerUser, loginUser, logoutUser, profile } = require('../controllers/userControllers');
const userMiddleware = require('../middleware/userMiddleware');
const router = express.Router();



router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)
router.get('/me', userMiddleware, profile)



module.exports = router;