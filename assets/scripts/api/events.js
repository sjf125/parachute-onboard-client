'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const authApi = require('./ajax.js');
const authUi = require('./ui.js');
// const serializeObj = require('~/bower_components/jquery-serialize-object');
// const app = require('./apiurl.js');

$.fn.serializeObject = function()
{
    let o = {};
    let a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

const addHandlers = () => {
  // Login handers
  $('#sign-up').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signUp(authUi.signUpSuccess, authUi.signUpFailure, data);
  });
  $('#sign-in').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
  });
  $('#sign-out').on('click', function (event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });
  $('#change-pass').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.changePass(authUi.success, authUi.failure, data);
  });
  $('#submit-info').on('click', function (event) {
    let data = $('#onboardingForm').serialize();
    event.preventDefault();
    authApi.submitInfo(authUi.success, authUi.failure, data);
  });$('#download-form').on('click', function (event) {
    // let data = $('#onboardingForm').serialize();
    event.preventDefault();
    authApi.downloadForm(authUi.success, authUi.failure);
  });
};

module.exports = {
  addHandlers
};
