var React = require('react');

import {browserHistory} from 'react-router';

// import Questions from './questions-list.jsx';
// import CountdownTimer from './countdown-timer.jsx';

var MarsTest = React.createClass ({

  getInitialState: function() {
    return {
      hideButton: false
    };
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

                </div>
            </div>
        );
    }
});

module.exports = MarsTest;
