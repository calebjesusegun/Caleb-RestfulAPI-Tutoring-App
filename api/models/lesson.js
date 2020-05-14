const mongoose = require('mongoose');

const lessonSchema = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   lessonName: { type: String, required: true },
   lessonSubject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
   lessonTime: { type: String, required: true }
});

module.exports = mongoose.model('Lesson', lessonSchema);