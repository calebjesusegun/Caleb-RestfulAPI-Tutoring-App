const Category = require('../models/category');
const Subject = require('../models/subject');
const mongoose = require("mongoose");


exports.categories_get_all = (req, res, next) => {
   Category.find()
      .select('categoryName categorySubject _id')
      .populate('categorySubject')
      .exec()
      .then(docs => {
         res.status(200).json({
            count: docs.length,
            categories: docs.map(doc => {
               return {
                  _id: doc._id,
                  categoryName: doc.categoryName,
                  categorySubject: doc.categorySubject,
                  request: {
                     type: 'GET',
                     url: 'http://localhost:3000/subjects/' + doc._id
                  }
               }
            })
         });
      })
      .catch(err => {
         res.status(500).json({
            error: err
         });
      });
}


exports.create_category = (req, res, next) => {
   Subject.findById(req.body.subjectId)
      .then(subject => {

         if (!subject) {
            return res.status(404).json({
               message: 'Product not found'
            });
         }
         const category = new Category({
            _id: mongoose.Types.ObjectId(),
            categoryName: req.body.categoryName,
            categorySubject: req.body.subjectId
         });
         return category.save();
      })
      .then(result => {
         console.log(result);
         res.status(201).json({
            message: 'Categories of Students Stored!!!',
            createdCategory: {
               _id: result._id,
               categoryName: result.categoryName,
               categorySubject: result.categorySubject
            },
            request: {
               type: 'GET',
               url: 'http://localhost:3000/categories/' + result._id
            }
         });
      })
      .catch(err => {
         res.status(500).json({
            message: 'Product not found',
            error: err
         });
      });
}

exports.Get_category_ByID = (req, res, next) => {
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
}

exports.categories_delete = (req, res, next) => {
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
}