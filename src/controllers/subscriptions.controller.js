const Subscription = require("../models/subscription.model");
const User = require("../models/user.model");

exports.create = (req, res) => {
  const subscription = new Subscription({
    subscriptionStart: req.body.subscriptionStart,
    subscriptionEnd: req.body.subscriptionEnd,
    price: req.body.price,
    description: req.body.description,
    createdBy: req.body.createdBy,
  });

  subscription
    .save()
    .then((data) => {
      User.findByIdAndUpdate(req.body.createdBy, {
        subscriptions: data._id,
      }).then(() => {
        res
          .send({
            data: data,
          })
          .catch((err) => res.send(err));
      });

      res.send({
        data: data,
      });
    })
    .catch((err) => res.send(err));
};

exports.getSubscription = (req, res) => {
    Subscription.findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Subscription with id ${req.params.id} not found!`,
        });
      }
      res.send(data);
    })
    .catch((err) => res.send(err));
};

exports.getSubscriptions = (req, res) => {
    Subscription.find()
    .populate('createdBy')
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Subscriptions not found!`,
        });
      }
      res.send(data);
    })
    .catch((err) => res.send(err));
};

exports.update = async (req, res) => {
    const updates = Object.keys(req.body)
    try{
        const subscription = await Subscription.findById(req.params.id)
        updates.forEach((update)=>{
            subscription[update] = req.body[update]
        })
        await subscription.save()

        if(!subscription){
            res.satatus(404).send({
                message: `Subscription with id ${req.params.id} not found!`            })
        }
        res.send({
            subscription 
        })
    } catch(err){
        res.send(err)
    }
}

exports.delete = async (req, res) => {
    try{
        const subscription = await Subscription.findByIdAndDelete(req.params.id)
        if(!subscription){
            res.satatus(404).send({
                message: `Subscription with id ${req.params.id} not found!`
            })
        }
        res.send({
            subscription 
        })
    } catch(err){
        res.send(err)
    }
}
