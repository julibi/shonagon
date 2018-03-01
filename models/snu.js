const mongoose = require('mongoose');

var Snu = mongoose.model('Snu', {
  title: {
    type: String,
    required: true,
    minlength: 1
  },
  text: {
    type: String,
    required: true,
    minlength: 1
  },
  keywords: {
    type: Array,
    required: true,
    minlength: 1
  },
  read: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    required: false,
  },
  modifiedAt: {
    type: Date,
    required: false,
  }
});

// export the model 
module.exports = { Snu };
