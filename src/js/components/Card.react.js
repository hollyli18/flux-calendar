import React, { Component } from 'react';
import AppDispatcher from '../dispatcher/AppDispatcher';
import CardStore from '../store/CardStore';
import styles from './Card.css';



class Card  extends Component {

  constructor(props){
    super(props);

    this.state = {
      isClicked: false,
      name: '',
      phoneNumber: ''
    }
  }


  press() {
    // console.log('pressed');
    AppDispatcher.dispatch({
      type: 'CARD_CHOSEN',
      index: this.props.index
    })
  }

  componentDidMount(){
    CardStore.on('chose a card', function(){
      // console.log('inside callback function');
      this.setState({
        isClicked: CardStore.cardArray[this.props.index].isClicked
      })
    }.bind(this))
  }



  render() {
    return (
        <div className={this.state.isClicked ? 'red' : 'green'}>
        <form>
        
            <span>  {this.props.value} </span>
            <br />
            <input type="text" name="Name" placeholder="Your Name" />
            <br />
            <input type="text" name="Phone" placeholder="Your Phone Number" />
        </form>
        <button onClick={this.press.bind(this)}> Enter </button>

       </div>
      )
  }
}


export default Card;
