'use strict';

const app = require('./apiurl.js');


const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
};

const signUpSuccess = (data) => {
  app.user = data.user;
  console.log(app);
};

const signUpFailure = (error) => {
  console.error(error);
};

const signOutSuccess = () => {
  app.user = null;
  console.log(app);
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
  console.log(app.user.id);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  signUpSuccess,
  signUpFailure
};
