const stripe = require('stripe')('sk_test_51IiRkbDDFfj3QhqsDSeogK7yWzHdGryV6wAyUxPddbw2Bvx191Tn2BZvJNfCbWEwNT76ESUbtiL332Of4nM2dHXv00qfjkWH5O');
const subscriptionModel = require('../models/subscription.model');

import {create} from './subscriptions.controller'




exports.create = (req, res) => {
  const subscription = new subscriptionModel({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });

  subscription.save()
    .then((data) => {
      res.send({
        token: userToken,
        auth: true,
      });
    })
    .catch((err) => {
      res.status(500).send({
        error: 500,
        message: err.message || 'Some error occured while creating the User!'
      });
    });
};



exports.createCheckoutSession = async (req, res) => {
    try{
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                  price_data: {
                    currency: 'eur',
                    product_data: {
                      name: req.body.title,
                      images: ['http://jeuneetjoly.com/wp-content/uploads/2019/04/abonnement-.png'],
                    },
                    unit_amount: req.body.price,
                  },
                  quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `http://tennis-team.herokuapp.com/accueil/succeed`,
            cancel_url: `http://tennis-team.herokuapp.com//accueil/canceled`,
          });
          res.json({ id: session.id });
    } catch(err){
        res.send("ERROR ",err)
    }
  
};
