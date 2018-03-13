import React, { Component } from 'react';
import style from './ReadSingleSnu.css'

export default class ReadSingleSnu extends Component {
  constructor(props) {
    super(props);
    this.state = { showTitles: false };
  }
  renderRandomSnu() {
    const { randomSnu, currentSnu } = this.props;
    const { showTitles } = this.state;

    // get rid of a randomSnu selector and create an action findOne(where read: false)
    // but I also need some kind of action that empties this randomSnu -object

    if(randomSnu || currentSnu) {
      return (
        <div>
          <h3>{ randomSnu.title || currentSnu.title }</h3>
              <p>{ randomSnu.text || currentSnu.text }</p>
          { !showTitles ? (
            <div>
              <button>Some other</button>
              <button onClick={ () => this.handleDoneReading(randomSnu || currentSnu) }>Done reading, next</button>
            </div>
          ) : (
            <div>
              <ul>{ this.props.keywordMatchingSnus.map((keywordMatchingSnu, idx) => 
                <li key={ idx }>
                  <button onClick={ () => this.fetchNextSnu(keywordMatchingSnu._id) }>
                    { keywordMatchingSnu.title }
                  </button>
                </li>) }
              </ul> 
            </div>
          ) }
        </div>
      );
    } 
    return <div>Loading ...</div>
  }

  handleDoneReading(snu) {
    const { setToRead, getSnusMatchingKeyword } = this.props;
    const id = snu._id; 
    if (snu.keywords.length > 0 && setToRead) {
      // setToRead(id, snu);

      this.setState({ showTitles: true });

      const randomIndex = Math.floor(Math.random() * snu.keywords.length);
      const randomKeyword = snu.keywords[randomIndex];

      getSnusMatchingKeyword(randomKeyword);
    } else {
        // IF IT DOESN'T dispatch the randomnext action (action II)
        console.log('Here will soon be the select random next snu action :)');
    } 
  }

  fetchNextSnu(id) {
          // IF IT HAS
          const { fetchSnu } = this.props;
          fetchSnu(id);
          this.setState({ showTitles: false });
            // axios.get(ROOT/snu/keyword) <-- create new route for that! (ROUTE I)
              // do all the database BRAINFUCK
              // if there is a fitting snu, thats great
              // if there isnt  dispatch (action II)
  }      

  fetchRandomSnu() {

  }

  render() {
    console.log('ReadSingleSnu, this.props: ', this.props);
    return (
      <div className={style.App}>
        <div>{ this.renderRandomSnu() }</div>
      </div>
    );
  }
}
