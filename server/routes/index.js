var express = require('express');
var router = express.Router();

var Item = require('../models/item');
var Category = require('../models/category');

router.get('/items', function(req, res, next) {
    Item.find({}).then(function(items) {
        res.json(items);
    }).catch(next)
});

router.get('/category', function(req, res, next) {
    Category.find({}).then(function(items) {
        res.json(items);
    }).catch(next)
});

router.post('/add/item', function(req, res, next) {
    Item.create({
        title: req.body.title,
        purchase_pice: req.body.purchase_pice,
        selling_price: req.body.selling_price,
        category: req.body.category
    }).then(function(item) {
        res.json(item);
    }).catch(next);
});

router.post('/add/category', function(req, res, next) {
    Category.create({
        title: req.body.title,
    }).then(function(item) {
        res.json(item);
    }).catch(next);
});

module.exports = router;