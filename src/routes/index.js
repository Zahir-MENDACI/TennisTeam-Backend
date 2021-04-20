const express = require('express');
const router = express.Router();

const usersRouter = require('./users.route');
const checkoutRouter = require('./checkout.route');
const subscriptionsRouter = require('./subscriptions.route');

router.use(usersRouter);
router.use(checkoutRouter);
router.use(subscriptionsRouter);


module.exports = router;