const express = require('express');
const router = express.Router();
const checkAuthTutor = require('../middleware/check-auth-tutor');

const CategoriesController = require('../controllers/categories');

//HANDLE INCOMING GET REQUESTS TO /Categories
router.get('/', CategoriesController.categories_get_all);

router.post('/', checkAuthTutor, CategoriesController.create_category);

router.get('/:categoryId', checkAuthTutor, CategoriesController.Get_category_ByID);

router.delete('/:categoryId', checkAuthTutor, CategoriesController.categories_delete);

module.exports = router;