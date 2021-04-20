const express = require('express');
const router = express.Router();
const user = require('../controllers/users.controller');
const verifyToken = require('../middlewares/verifyToken');
const userRegistrationSchemaValidation = require('../middlewares/validators/users.registration.validator.js');
const userUpdateSchemaValidation = require('../middlewares/validators/users.update.validator.js');

// REGISTRATION
router.post('/users' , userRegistrationSchemaValidation,user.create);
// CONNEXION
router.post('/users/login', user.login);
// READ AND UPDATE USERS DATA
router.get('/users/:id', verifyToken, user.findOne);
router.get('/users/', user.getUsers);
router.patch('/users/:id', verifyToken, userUpdateSchemaValidation, user.update);

module.exports = router;