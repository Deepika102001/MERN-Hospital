const mongoose = require('mongoose');
const OfficialTable = new mongoose.Schema({
   
name:String,
email:String,
password:String,
age:Number,
contact:Number,
role:String
      // Other fields as needed
    },{ collection: 'official' });
const OfficialtModel = mongoose.model('official', OfficialTable);
module.exports=OfficialtModel
