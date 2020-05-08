const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require("../middleware/check-auth");

const Category = require('../models/category');
const Subject = require('../models/subject');

const CategoriesController = require('../controllers/categories');

//HANDLE INCOMING GET REQUESTS TO /Categories
router.get('/', CategoriesController.categories_get_all);

router.post('/', checkAuth, CategoriesController.create_category);

router.get('/:categoryId', checkAuth, (req, res, next) => {
   Category.findById(req.params.categoryId)
      .populate('categorySubject')
      .exec()
      .then(category => {
         if (!category) {
            return res.status(404).json({
               message: "Category not found!!!"
            });
         }
         res.status(200).json({
            category: category,
            request: {
               type: 'GET',
               url: 'http://localhost:3000/categories/'
            }
         });
      })
      .catch(err => {
         res.status(500).json({
            error: err
         });
      });
});

router.delete('/:categoryId', checkAuth, (req, res, next) => {
   Category.remove({ _id: req.params.categoryId })
      .exec()
      .then(result => {
         res.status(200).json({
            message: 'Category deleted',
            request: {
               type: 'GET',
               url: 'http://localhost:3000/categories/',
               body: { subjectId: 'ID', categoryName: 'String' }
            }
         });

      })
      .catch(err => {
         res.status(500).json({
            error: err
         });
      });
});

module.exports = router;