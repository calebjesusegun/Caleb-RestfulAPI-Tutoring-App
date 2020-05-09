const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');


const UserController = require('../controllers/users');

//THIS IS FOR THE STUDENTS
router.post('/signup', UserController.signup_student);

router.post('/login', UserController.login_student);

router.delete('/:userId', checkAuth, UserController.student_delete);


//THIS IS FOR BOTH THE TUTORS AND THE ADMIN
router.post('/signup-tutor', UserController.tutor_signup);


router.post('/login-tutor', UserController.tutor_signup);


module.exports = router;