const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const checkAuthTutor = require('../middleware/check-auth-tutor');


const UserController = require('../controllers/users');

//THIS IS FOR THE STUDENTS
router.post('/signup', UserController.signup_student);

router.post('/login', UserController.login_student);

router.delete('/signup/:userId', checkAuthTutor, UserController.student_delete);

module.exports = router;