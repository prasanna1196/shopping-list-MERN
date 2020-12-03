const express = require('express');
const router = express.Router();

// Item model

const Item = require('../../models/Item');

// Get request
router.get('/', (req, res) => {
    Item.find()
        .sort({date: -1})
        .then(item => res.json(item));
});

// Post request
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

// Delete item
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({msg: 'item removed'})))
        .catch(err => res.status(404).json({msg: "Item doesn't exist"}));
});


module.exports = router;





