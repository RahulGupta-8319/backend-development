// const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId

// const bookSchema = new mongoose.Schema( {
//     name: String,
//     author_id: {
//         type: ObjectId,
//         ref: "Author"
//     }, 
//     price: Number,
//     ratings: Number


// }, { timestamps: true });


// module.exports = mongoose.model('LibraryBook', bookSchema)

//--------------------------------------------------------------------------//

const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({

    name: String,
    author: {
        type: ObjectId,
        ref: "Author"
        // required:true
    },
    price: Number,
    ratings: Number,
    publisher: {
        type: ObjectId,
        ref: "Publisher"
        // required:true
    },
    isHardCover: {
        type:Boolean,
        default:false
    }

}, { timestamps: true })

module.exports = mongoose.model('Book', bookSchema)