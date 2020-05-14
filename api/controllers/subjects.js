const Subject = require("../models/subject");
const mongoose = require("mongoose");

exports.subjects_get_all = (req, res, next) => {
   Subject.find({})
      .sort({ subjectName: '1' })
      .select('subjectName subjectType _id')
      .exec()
      .then(docs => {
         const response = {
            count: docs.length,
            subjects: docs.map(doc => {
               return {
                  subjectName: doc.subjectName,
                  subjectType: doc.subjectType,
                  _id: doc._id,
                  request: {
                     type: 'GET',
                     url: 'http://localhost:3000/subjects/' + doc._id
                  }
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

exports.subjects_create = (req, res, next) => {
   const subject = new Subject({
      _id: new mongoose.Types.ObjectId(),
      subjectName: req.body.subjectName,
      subjectType: req.body.subjectType
   });

   subject
      .save()
      .then(result => {
         console.log(result);
         res.status(201).json({
            message: "Created Subject successfully",
            createdSubject: {
               subjectName: result.subjectName,
               subjectType: result.subjectType,
               _id: result._id,
               request: {
                  type: 'GET',
                  url: "http://localhost:3000/subjects/" + result._id
               }
            }
         })
            .catch(err => {
               console.log(err);
               res.status(500).json({
                  error: err
               });
            });
      });
}


exports.getSubjectID = (req, res, next) => {
   const id = req.params.subjectId;
   Subject.findById(id)
      .select('subjectName subjectType _id')
      .exec()
      .then(doc => {
         console.log("From the database", doc);
         if (doc) {
            res.status(200).json({
               subject: doc,
               request: {
                  type: 'GET',
                  url: "http://localhost:3000/subjects"
               }
            });
         } else {
            res.status(404).json({ message: "No valid entry found for the provided entry" });
         }
      })
      .catch(err => {
         console.log(err);
         res.status(500).json({ error: err });
      });
}

exports.subjects_update = (req, res, next) => {
   const id = req.params.subjectId;
   const updateOps = {};

   for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
   }

   Subject.update({ _id: id }, { $set: updateOps })
      .exec()
      .then(result => {
         res.status(200).json({
            message: "Subject updated",
            request: {
               type: "GET",
               url: "http://localost:3000/subjects/" + id
            }
         });
      })
      .catch(err => {
         console.log(err);
         res.status(500).json({ error: err });
      });
}

exports.subjects_delete = (req, res, next) => {
   const id = req.params.subjectId;
   Subject.remove({ _id: id })
      .exec()
      .then(result => {
         res.status(200).json({
            message: "Subject DELETED",
            request: {
               type: "POST",
               url: "http://localost:3000/subjects",
               body: { subjectName: 'String', subjectType: 'String' }
            }
         });
      })
      .catch(err => {
         console.log(err);
         res.status(500).json({
            error: err
         })
      });
}

