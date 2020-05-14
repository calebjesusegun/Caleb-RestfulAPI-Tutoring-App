const express = require('express');
const router = express.Router();

const checkAuthTutor = require('../middleware/check-auth-tutor');


const UserTutorController = require('../controllers/usersTutor');

//THIS IS FOR BOTH THE TUTORS AND THE ADMIN
router.get('/signup-tutor', UserTutorController.tutor_get_all);

router.post('/signup-tutor', UserTutorController.tutor_signup);

router.post('/login-tutor', UserTutorController.tutor_login);

router.delete('/signup-tutor/:userId', checkAuthTutor, UserTutorController.tutor_delete);


module.exports = router;