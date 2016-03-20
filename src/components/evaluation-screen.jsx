var React = require('react');

import {browserHistory} from 'react-router';

import QuestionsQuiz from './questions-screen.jsx';
import CountdownTimer from './countdown-timer.jsx';


var questionsList = [
  {
       question: 'Mars is home to the tallest mountain in the solar system: True or False?',
       answer: true
     },
     {
       question: 'Mars has the largest dust storms in the solar system: True or False?',
       answer: true
     },
     {
       question: 'Mars and Earth have approximately the same landmass: True or False?',
       answer: true
     }
];


var MarsTest = React.createClass ({

  getInitialState: function() {
    return {
      hideButton: false,
    };
  },

  handleCorrect: function() {
    this.props.history.push('/accepted-screen');
  },

// Trying to get 0:00 = push to Rejected Page - still a WIP
  // onTimerFinished: function() {
  //   // this.props.history.push('/rejected-screen');
  //   handleFailure();
  // },

  handleFailure: function() {
    this.props.history.push('/rejected-screen');
  },

  initiateTest: function() {
      this.setState({hideButton: !false});
  },

    render: function(){
        return (
            <div className='wrapper'>
                <div className='section-style'>

                    <button className={'evaluation-button ' +
                      (this.state.hideButton ? ' hidden': '')}
                      onClick={this.initiateTest}>
                      Begin Evalution
                    </button>

                    <div className={(!this.state.hideButton ? 'clock-container hide-clock hidden': 'clock-container')}>
                      <CountdownTimer startTimer={this.state.hideButton}/>
                    </div>

                    <div className={(!this.state.hideButton ? ' hidden': '')}>
                      <QuestionsQuiz onCorrect={this.handleCorrect} questions={questionsList} onFailure={this.handleFailure}/>
                    </div>

                </div>
            </div>
        );
    }
});

module.exports = MarsTest;
