const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require("../middleware/check-auth");

const Lesson = require('../models/lesson');
const Subject = require('../models/subject');

//HANDLE INCOMING GET REQUESTS TO /Lessons
router.get('/', checkAuth, (req, res, next) => {
   Lesson.find()
      .select('lessonName lessonSubject lessonTime _id')
      .populate('lessonSubject')
      .exec()
      .then(docs => {
         res.status(200).json({
            count: docs.length,
            lessons: docs.map(doc => {
               return {
                  _id: doc._id,
                  lessonName: doc.lessonName,
                  lessonSubject: doc.lessonSubject,
                  lessonTime: doc.lessonTime,
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
});

router.post('/', checkAuth, (req, res, next) => {
   Subject.findById(req.body.subjectId)
      .then(subject => {

         if (!subject) {
            return res.status(404).json({
               message: 'Lesson not found'
            });
         }
         const lesson = new Lesson({
            _id: mongoose.Types.ObjectId(),
            lessonName: req.body.lessonName,
            lessonSubject: req.body.subjectId,
            lessonTime: req.body.lessonTime
         });
         return lesson.save();
      })
      .then(result => {
         console.log(result);
         res.status(201).json({
            message: 'The Lesson has been Stored!!!',
            createdLesson: {
               _id: result._id,
               lessonName: result.lessonName,
               lessonSubject: result.lessonSubject,
               lessonTime: result.lessonTime
            },
            request: {
               type: 'GET',
               url: 'http://localhost:3000/lessons/' + result._id
            }
         });
      })
      .catch(err => {
         res.status(500).json({
            message: 'Lesson not found',
            error: err
         });
      });
});

router.get('/:lessonId', checkAuth, (req, res, next) => {
   Lesson.findById(req.params.lessonId)
      .populate('lessonSubject')
      .exec()
      .then(lesson => {
         if (!lesson) {
            return res.status(404).json({
               message: "Lesson not found!!!"
            });
         }
         res.status(200).json({
            lesson: lesson,
            request: {
               type: 'GET',
               url: 'http://localhost:3000/lessons/'
            }
         });
      })
      .catch(err => {
         res.status(500).json({
            error: err
         });
      });
});

router.patch('/:lessonId', checkAuth, (req, res, next) => {
   const id = req.params.lessonId;
   const updateOps = {};

   for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
   }

   Lesson.update({ _id: id }, { $set: updateOps })
      .exec()
      .then(result => {
         res.status(200).json({
            message: "Subject updated",
            request: {
               type: "GET",
               url: "http://localost:3000/lessons/" + id
            }
         });
      })
      .catch(err => {
         console.log(err);
         res.status(500).json({ error: err });
      });
});

router.delete('/:lessonId', checkAuth, (req, res, next) => {
   Lesson.remove({ _id: req.params.lessonId })
      .exec()
      .then(result => {
         res.status(200).json({
            message: 'Lesson deleted',
            request: {
               type: 'GET',
               url: 'http://localhost:3000/lesson/',
               body: { subjectId: 'ID', lessonName: 'String', lessonTime: 'String' }
            }
         });

      })
      .catch(err => {
         res.status(500).json({
            error: err
         });
      });
});

module.exports = router;