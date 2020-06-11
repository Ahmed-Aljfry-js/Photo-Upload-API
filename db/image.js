import mongoose from 'mongoose';
const imageSchema = new mongoose.Schema({
    fileName:{
        type:String,
        required:true,
        trim:true,
        minlength:2
    },
    fileType:String,
    fileSize:String,
    file:Buffer
});

const Image = mongoose.model('Image',imageSchema);

export default Image;