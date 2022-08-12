const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 2,
        trim: true

    },
    _listId: {
        type: mongoose.Types.ObjectId,
        required: true
    }


})
const task = mongoose.model('task', taskSchema);

module.exports = { task };