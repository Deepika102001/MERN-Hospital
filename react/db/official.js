// const mongoose = require('mongoose');

// const OfficialSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     age: {
//         type: Number,
//         required: true
//     },
//     contact: {
//         type: Number,
//         required: true
//     },
//     role: {
//         type: String,
//         required: true
//     }
//     // Other fields as needed
// }, { collection: 'official' });

// const OfficialtModel = mongoose.model('Official', OfficialSchema);

// module.exports = OfficialtModel;








const mongoose = require('mongoose');
const OfficialTable = new mongoose.Schema({
   
name:String,
email:String,
password:String,
role:String
      // Other fields as needed
    },{ collection: 'official' });
const OfficialtModel = mongoose.model('official', OfficialTable);
module.exports=OfficialtModel