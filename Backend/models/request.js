//REQUEST-zahtev kad se dodeli zaposlenom postaje TASK-obaveza
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const requestSchema = new Schema ({
    date: {
        type: String
        //default: Date.now
    },
    comment: {
        //dodatni zahtev
        type: String,
        required:true
    },
    type: {
        type:String,
        required: true
    },
    time:{
        type:String,
         //required:true
    },
    status: {
        type: String
    },
    korisnikid: {
        type: String, 
        required: true
    },
    korIme:{
        type:String
    },
    notification:{
        type:String
    },
    numberKor: {
        type: String
    }
});

module.exports = mongoose.model('Request', requestSchema);