var Dispatcher = require('flux').Dispatcher;
var CardStore = require('../store/CardStore')
var AppDispatcher = new Dispatcher();

// AppDispatcher.handleAction = function(action) {
//   this.dispatch({
//     type: 'VIEW_ACTION',
//     action: action
//   });
// }

AppDispatcher.register(function(payload){

  // console.log('got to AppDispatcher');

// payload: { type: "some string", otherdata

  switch(payload.type){

    case 'CARD_CHOSEN':
    // console.log('inside case');

    CardStore.cardArray[payload.index].isClicked = true;
    CardStore.emit('chose a card');

}


});


module.exports = AppDispatcher;
