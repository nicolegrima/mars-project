var React = require('react');

import {browserHistory} from 'react-router';

var Welcome = React.createClass ({

  takeTest: function() {
      this.props.history.push('/evaluation-screen');
  },

    render(){
        return (

          <div className='wrapper'>

              <div className='section-style'>
                  <button className='test-button' onClick={this.takeTest}>Take Test</button>
              </div>

          </div>
        );
    }
});

module.exports = Welcome;
