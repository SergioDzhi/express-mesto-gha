const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Поле обязательно для заполнения'],
    minlength: [2, 'Минимальная длина имени — 2'],
    maxlength: [30, 'Максимальная длина имени — 30'],
  },
  about: {
    type: String,
    required: [true, 'Поле обязательно для заполнения'],
    minlength: [2, 'Минимальная длина имени — 2'],
    maxlength: [30, 'Максимальная длина имени — 30'],
  },
  avatar: {
    type: String,
    required: [true, 'Поле обязательно для заполнения'],
    validate: {
      validator(url) {
        return /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(url);
      },
      message: 'Введите URL',
    },
  },
}, { versionKey: false });

module.exports = mongoose.model('user', userSchema);
