const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const caseSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  username: {
    type:String,
  },
  comments:[
    {
      type: Schema.Types.ObjectId,
      ref: 'comments'
    }

  ] ,
  condition: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  ward: {
    type: String,
    required: true
  },
  system: {
    type: String,
    required: true
  },
  positives: {
    type: String,
    required: true
  },
  createdAt: {type: Date, default: Date.now,} 
});

module.exports = Post = mongoose.model('cases', caseSchema);
