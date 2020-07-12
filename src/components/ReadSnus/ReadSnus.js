import React, { Component } from 'react';
import './ReadSnus.css';

export default class ReadSnus extends Component {

  renderReadSnus() {
    return(
      <ul>
      { this.props.readSnus.map((readSnu, idx) =>
         <li
            className="readSnu" 
            key={idx}
          >
           <div className="test">
            <h3>{ readSnu.title }</h3>
            <p>{ readSnu.text.slice(0,40) + ' ...' }</p>
           </div>
         </li> 
        ) 
      }
      </ul>
    );
  }

  // render multiple times. maybe just create an action creator?

  render() {
    return (
      <div>
        <h2>History</h2>
        { this.renderReadSnus() }
      </div>
    );
  }
}
