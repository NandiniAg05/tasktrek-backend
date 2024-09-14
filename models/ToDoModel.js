const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    },

    tim: {
        type: Date,
        require: true
    }
})

module.exports = mongoose.model('ToDo', todoSchema)