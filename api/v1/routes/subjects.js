const express = require('express');
const router = express.Router();
const Subject = require('../models/subject');
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');
const SubjectController = require("../controllers/subjects");

router.get('/', SubjectController.subjects_get_all);

router.post('/', checkAuth, SubjectController.subjects_create);

router.get('/:subjectId', SubjectController.getSubjectID);

router.patch('/:subjectId', SubjectController.subjects_update);

router.delete('/:subjectId', checkAuth, SubjectController.subjects_delete);

module.exports = router;