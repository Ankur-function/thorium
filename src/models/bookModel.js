
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
	author: {type: ObjectId, ref: "NewAuthor"},
	price: Number,
    ratings: Number,
	publisher: {type: ObjectId, ref: "NewPublisher"}
}, { timestamps: true });


module.exports = mongoose.model('NewBook', bookSchema)











/*const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "Author"
    },
    price: Number,
    ratings: Number


}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema) */
