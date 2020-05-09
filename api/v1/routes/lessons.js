const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require("../middleware/check-auth");

const Lesson = require('../models/lesson');
const Subject = require('../models/subject');

const LessonsController = require('../controllers/lessons');

//HANDLE INCOMING GET REQUESTS TO /Lessons
router.get('/', checkAuth, LessonsController.get_lesson);

router.post('/', checkAuth, LessonsController.lesson_post);

router.get('/:lessonId', checkAuth, LessonsController.getLesson_byID);

router.patch('/:lessonId', checkAuth, LessonsController.updateLesson);

router.delete('/:lessonId', checkAuth, LessonsController.deleteLesson);

module.exports = router;