const OK_CODE = 200;
const CREATED_CODE = 201;
const BAD_REQUEST_CODE = 400;
const NOT_FOUND_CODE = 404;
const SERVER_ERROR_CODE = 500;

const urlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;
const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

module.exports = {
  NOT_FOUND_CODE, BAD_REQUEST_CODE, SERVER_ERROR_CODE, OK_CODE, CREATED_CODE, urlRegex, emailRegex,
};
