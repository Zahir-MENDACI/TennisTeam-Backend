const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
        subscriptionStart: Date,
        subscriptionEnd: Date,
        price: Number,
        description: {
            type: String,
            trim: true 
        },
        createdBy: {
            type: Schema.Types.ObjectId, ref:'User'
        }
    }, 
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Subscription',subscriptionSchema);
