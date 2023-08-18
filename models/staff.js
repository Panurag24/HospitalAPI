const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    
  phone: {
      type: Number,
      maxlength:20,
      required: true,
      unique:true,
  },
  name: {
      type: String,
      required:true,
  },
  doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'patient'
  }
}, {
    timestamps: true
  });


const Patient = mongoose.model('Patient', patientSchema);
module.exports = staff;
