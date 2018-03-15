import React, { Component } from 'react';
import style from './ReadSingleSnu.css'
import { getRandomSnu } from '../../actions';

export default class ReadSingleSnu extends Component {
  constructor(props) {
    super(props);
    this.state = { showTitles: false };
  }

  renderSnu() {
    const { randomSnu, currentSnu } = this.props;
    const { showTitles } = this.state;

    if(currentSnu || randomSnu) {
      const snu = currentSnu || randomSnu;
      return (
        <div>
          <div>
            <h3>{ snu.title }</h3>
                <p>{ snu.text }</p>
          </div>    
          { !showTitles ? (
              <div>
                <button onClick={ () => this.handleRandomSnu(snu) }>Some other</button>
                <button onClick={ () => this.handleDoneReading(snu) }>Done reading, next</button>
              </div>
            ) : (
              <div>
                <ul>{ this.props.keywordMatchingSnus.map((keywordMatchingSnu, idx) =>
                  { if (keywordMatchingSnu._id !== snu._id) {
                    return(
                    <li key={ idx }>
                      <button onClick={ () => this.fetchNextSnu(keywordMatchingSnu._id, snu._id, snu) }>
                        { keywordMatchingSnu.title }
                      </button>
                    </li>)
                    } else {
                      return
                    }
                  }
                ) }
                </ul> 
              </div>
            )
          }
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }

  handleDoneReading(snu) {
    const { getSnusMatchingKeyword, getRandomSnu } = this.props;

    if (snu.keywords.length > 0) {
      const randomIndex = Math.floor(Math.random() * snu.keywords.length);
      const randomKeyword = snu.keywords[randomIndex];

      getSnusMatchingKeyword(randomKeyword);
      
      this.setState({ showTitles: true });

    } else {
      this.handleRandomSnu(snu);
    } 
  }

  fetchNextSnu(id, oldId, oldSnu) {

    const { fetchSnu, setToRead } = this.props;

    setToRead(oldId, oldSnu);
    fetchSnu(id);
    this.setState({ showTitles: false });

      // TAKE CARE OF 2 EDGE CASES:
        // the random endpoint sometimes returns the same as currentSnu
        // sometimes you filter by clicking on done reading but there are no snus left that
          // dispatch the random action
  }      

  handleRandomSnu(snu) {
    const { setToRead, getRandomSnu } = this.props;
    setToRead(snu._id, snu);
    getRandomSnu();
  }

  render() {
    console.log(this.props);
    return (
      <div className={style.App}>
        <div>{ this.renderSnu() }</div>
      </div>
    );
  }
}
