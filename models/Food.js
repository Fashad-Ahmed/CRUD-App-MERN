const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({ 
    foodName: {
        type: String,
        required: true,
    },
    days: {
        type: Number,
        required: true,
    },
 
});

const Food =  mongoose.model('foods', FoodSchema);

module.exports = Food