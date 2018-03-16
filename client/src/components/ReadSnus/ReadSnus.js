import React, { Component } from 'react';

export default class ReadSnus extends Component {

  renderReadSnus() {
    return(
      <ul>
      { this.props.unreadSnus.map((unreadSnu, idx) => 
         <li key={idx}>
           <div>
            <h3>{ unreadSnu.title }</h3>
            <p>{ unreadSnu.text }</p>
           </div>
         </li> 
        ) 
      }
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h3>Read Snus</h3>
        { this.renderReadSnus() }
      </div>
    );
  }
}
