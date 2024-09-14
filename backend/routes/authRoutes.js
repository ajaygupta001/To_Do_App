const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

// Register route
router.post('/register', authController.register);

// Login route
router.post('/login', authController.login);

// // Protected route (to-do app)
// router.get('/todo', authController.verifyUser, authController.todoApp);

module.exports = router;
