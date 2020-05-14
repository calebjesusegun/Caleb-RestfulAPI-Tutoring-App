const express = require('express');
const router = express.Router();
const Subject = require('../models/subject');
const mongoose = require('mongoose');

const checkAuth = require('../middleware/check-auth');
const checkAuthTutor = require('../middleware/check-auth-tutor');


const SubjectController = require("../controllers/subjects");

router.get('/', SubjectController.subjects_get_all);

router.post('/', checkAuthTutor, SubjectController.subjects_create);

router.get('/:subjectId', SubjectController.getSubjectID);

router.patch('/:subjectId', checkAuthTutor, SubjectController.subjects_update);

router.delete('/:subjectId', checkAuthTutor, SubjectController.subjects_delete);

module.exports = router;