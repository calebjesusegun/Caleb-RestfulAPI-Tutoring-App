const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require("../middleware/check-auth");

const checkAuthTutor = require('../middleware/check-auth-tutor');


const Lesson = require('../models/lesson');
const Subject = require('../models/subject');

const LessonsController = require('../controllers/lessons');

//HANDLE INCOMING GET REQUESTS TO /Lessons
router.get('/', checkAuthTutor, LessonsController.get_lesson);

router.post('/', checkAuth, checkAuthTutor, LessonsController.lesson_post);

router.get('/:lessonId', checkAuthTutor, LessonsController.getLesson_byID);

router.patch('/:lessonId', checkAuthTutor, LessonsController.updateLesson);

router.delete('/:lessonId', checkAuthTutor, LessonsController.deleteLesson);

module.exports = router;