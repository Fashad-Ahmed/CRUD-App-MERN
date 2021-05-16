const express = require('express');
const router = express.Router()
const FoodModel = require('../models/Food');

router.post('/insert', async (req, res) => {
    const foodName = req.body.foodName;
    const days = req.body.days;

    const food = new FoodModel({
        foodName: foodName,
        days: days,
    });

    try {
        await food.save();
        res.send('data inserted');
    } catch (err) {
        console.log(err);
    }
});

router.get('/read', async (req, res) => {
    FoodModel.find({}, (err, result) => {
        if (err) {
            res.status(400);
            res.send(err);
        }
        res.send(result);
    });
}
);

router.put('/edit', async (req, res) => {
    const NewupdateFood = req.body.updateFood;
    const id = req.body.id;

    try {
        await FoodModel.findById(id, (err, updatedFood) => {
            updatedFood.foodName = NewupdateFood;
            updatedFood.save();
            res.send(`${updatedFood} got updated.`);
        })
    } catch (err) {
        console.log(err);
    }
});

router.delete('/delete/:id', async (req, res) => {
    await FoodModel.findByIdAndRemove(req.params.id).exec((err, deleteItem) => {
        if (err) res.send(err);
        return res.send('deleted');
        }
    );
});

module.exports = router;

// router.post('/add', (req, res) => {
//     const food = new Food(req.body);
//     food.save((err) => {
//         if (err) return res.status(400).json({ success: false, err});
//         return res.status(200).json({ success: true });
//     });
// });

// router.get('/', (req, res) => {
//     Food.find().exec((err, foods) => {
//         if (err) return res.status(400).json({ success: false, err});
//         return res.status(200).json({ success: true, foods: foods });
//     });
// });

// router.put('/update/:id', (req, res) => {
//     Food.findByIdAndUpdate(
//         req.params.id, {
//             $set: req.body
//         }, 
//         (err, food) => {
//             if (err) return res.status(400).json({ success: false, err});
//             return res.status(200).json({ success: true })
//         }
//     );
// });

// router.delete('/delete/:id', (req, res) => {
//     Food.findByIdAndRemove(req.params.id).exec((err, deleteItem) => {
//         if (err) res.send(err);
//         return res.json(deleteItem);
//         }
//     );
// });

