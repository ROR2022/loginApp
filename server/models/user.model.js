import mongoose from "mongoose";

/**
 * 
Email
First Name
Last Name
Company Name
Phone Number
Address 01
Address 02
Country 
State
Pin Code
Terms & Conditions
 * 
 * 
 */

const userSchema= new mongoose.Schema({
  email:{
    type: String,
    unique: true,
    trim: true
  },
  firstName:{
    type: String,
    trim: true
  },
  lastName:{
    type: String,
    trim: true
  },
  companyName: {
    type: String,
    trim: true
  },
  phoneNumber: {
    type: String,
    trim: true
  },
  adress01: {
    type: String,
    trim: true
  },
   adress02: {
    type: String,
    trim: true
  },
  country: {
    type: String,
    trim: true
  },
  state: {
    type: String,
    trim: true
  },
  pinCode: {
    type: String,
    trim: true
  },
  tyc: {
    type: Boolean
  },
    password: {
        type: String,
        trim: true
    }
},
{
  timestamps: true,
})

export default mongoose.model('User', userSchema)