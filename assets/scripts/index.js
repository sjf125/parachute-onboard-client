'use strict';

const events = require('./api/events.js');
// const app = require('./api/apiurl.js');

$(() => {
  events.addHandlers();
});
