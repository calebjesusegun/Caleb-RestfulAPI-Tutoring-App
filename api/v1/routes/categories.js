const express = require('express');
const router = express.Router();
const checkAuth = require("../middleware/check-auth");

const CategoriesController = require('../controllers/categories');

//HANDLE INCOMING GET REQUESTS TO /Categories
router.get('/', CategoriesController.categories_get_all);

router.post('/', checkAuth, CategoriesController.create_category);

router.get('/:categoryId', checkAuth, CategoriesController.Get_category_ByID);

router.delete('/:categoryId', checkAuth, CategoriesController.categories_delete);

module.exports = router;