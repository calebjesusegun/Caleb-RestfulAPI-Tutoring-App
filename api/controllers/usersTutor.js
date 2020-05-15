const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserTutor = require('../models/userTutor');


exports.tutor_get_all = (req, res, next) => {
   UserTutor.find()
      .sort({ firstName: '1' })
      .select('firstName lastName _id')
      .exec()
      .then(docs => {
         const response = {
            count: docs.length,
            users: docs.map(doc => {
               return {
                  firstName: doc.firstName,
                  lastName: doc.lastName,
                  _id: doc._id
               }
            })
         };
         // if (docs.length >= 0) {
         res.status(200).json(response);
         // } else {
         //    res.status(404).json({
         //       message: "No entries found"
         //    });
         // }
      })
      .catch(err => {
         console.log(err);
         res.status(500).json({
            error: err
         });
      });
}


exports.tutor_signup = (req, res, next) => {
   UserTutor.find({ email: req.body.email })
      .exec()
      .then(user => {
         if (user.length >= 1) {
            return res.status(409).json({
               message: "Email exists"
            });
         } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
               if (err) {
                  return res.status(500).json({
                     error: err
                  });
               } else {
                  const user = new UserTutor({
                     _id: new mongoose.Types.ObjectId(),
                     firstName: req.body.firstName,
                     lastName: req.body.lastName,
                     email: req.body.email,
                     password: hash
                  });
                  user.save()
                     .then(result => {
                        console.log(result);
                        res.status(201).json({
                           message: 'User Created'
                        });
                     })
                     .catch(err => {
                        console.log(err);
                        res.status(500).json({
                           error: err
                        });
                     });
               }
            });

         }
      })
}


exports.tutor_login = (req, res, next) => {
   UserTutor.find({ email: req.body.email })
      .exec()
      .then(user => {
         if (user.length < 1) {
            return res.status(401).json({
               message: "Authorization Failed"
            });
         }
         bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if (err) {
               return res.status(401).json({
                  message: "Authentication Failed"
               });
            }
            if (result) {
               const token = jwt.sign({
                  email: user[0].email,
                  userId: user[0]._id
               }, "secret", {
                  expiresIn: "1h"
               });
               return res.status(200).json({
                  message: "Authentication Successful",
                  token: token
               });
            }
            res.status(401).json({
               message: "Authentication Failed"
            });
         })
      })
      .catch(err => {
         console.log(err);
         res.status(500).json({
            error: err
         });
      })
}

exports.tutor_delete = (req, res, next) => {
   UserTutor.remove({ _id: req.params.userId })
      .exec()
      .then(result => {
         res.status(200).json({
            message: 'User deleted'
         });
      })
      .catch(err => {
         console.log(err);
         res.status(500).json({
            error: err
         });
      });
}