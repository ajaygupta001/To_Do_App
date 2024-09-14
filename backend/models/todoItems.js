const mongoose = require('mongoose');

const todoItemsSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('ToDo', todoItemsSchema);