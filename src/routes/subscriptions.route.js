const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const subscription = require('../controllers/subscriptions.controller');
const subscriptionSchemaValidation = require('../middlewares/validators/subscriptions.validator');

// CREATE,UPDATE AND DELETE SUBSCRIPTIONS
router.post('/subscriptions' , verifyToken, subscriptionSchemaValidation, subscription.create);
router.patch('/subscriptions/:id', verifyToken, subscriptionSchemaValidation, subscription.update);
router.delete('/subscriptions/:id', verifyToken, subscription.delete);
// GET SUBSCRIPTIONS DATA
router.get('/subscriptions/', subscription.getSubscriptions);
router.get('/subscriptions/:id', subscription.getSubscription);

module.exports = router;