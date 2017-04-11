var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxActionConstants = require('../constants/FluxActionConstants');
var EventEmitter = require('events').EventEmitter;

var CardStore = Object.assign({}, EventEmitter.prototype, {
  name: '',
  description: '',
  cardArray:   Array(8).fill({
      name: '',
      phoneNumber: '',
      isClicked: false
    }).map((x) => Object.assign({}, x))
  }
)

module.exports = CardStore;
