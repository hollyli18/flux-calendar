import React, { Component } from 'react';
import Card from './Card.react.js'

class CalendarApp  extends Component {
  render() {

    var slot = [
      {time: '9-10'},
      {time: '10-11'},
      {time: '11-12'},
      {time: '12-1'},
      {time: '1-2'},
      {time: '2-3'},
      {time: '3-4'},
      {time: '4-5'}
    ]

    return (
      // <p> Hello! </p>
      <div>
      {slot.map((slot, i) => (
      <Card key={slot.time} value={slot.time} index={i}/>
    )
  )}
  </div>
)
}
}

export default CalendarApp;
