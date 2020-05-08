const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   categoryName: { type: String, required: true },
   categorySubject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true }
});

module.exports = mongoose.model('Category', categorySchema);