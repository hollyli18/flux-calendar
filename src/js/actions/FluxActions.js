var AppDispatcher = require('../dispatcher/AppDispatcher');
// var FluxActionConstants = require('../constants/FluxActionConstants');

var FluxActions = {
  chooseSlot: function(data){
    AppDispatcher.handleAction({
      actionType: FluxActionConstants.CARD_CHOSEN,
      data: data
    })
  // },
  //
  // editSlot: function()
}
};

module.exports = FlexActions;



// import AppDispatcher from '../dispatcher/AppDispatcher';
// import FluxActionConstants from '../constants/FluxActionConstants';
//
//
// class FluxActions extends Component {
//   render() {
//     return (
//       <p> Hello! </p>
//     )
//   }
// }
//
// export default FluxActions;
