const mongoose = require('mongoose');

const subjectSchema = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   subjectName: { type: String, required: true },
   subjectType: { type: String, required: true }
});

module.exports = mongoose.model('Subject', subjectSchema);