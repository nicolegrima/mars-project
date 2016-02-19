var React = require('react');

import {browserHistory} from 'react-router';

// import Questions from './components/questions-list.jsx';
// import CountdownTimer from './components/countdown-timer.jsx';

var MarsTest = React.createClass ({

  getInitialState: function() {
    return {
      // showQuestions: false,
      // showTimer: false,
      // hideButton: false
    };
  },

  initiateTest: function() {
      this.setState({hideButton: true});
  },

    render: function(){
        return (
            <div className='wrapper'>
                <div className='section-style'>
                    <button className='evaluation-button' onClick={this.initateTest}>Begin Evalution</button>

                </div>
            </div>

        );
    }
});

module.exports = MarsTest;

    //{ this.state.hideButton ? {this.prop.hide} : <Button />}//
