const express = require('express');
const router = express.Router();
const checkout_controller = require('../controllers/checkout.controller');

// CREATE CHECKOUT SESSION
router.post('/create-checkout-session', checkout_controller.createCheckoutSession);

module.exports = router;