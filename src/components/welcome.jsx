var React = require('react');

var Welcome = React.createClass ({

  takeTest() {
      this.props.history.push('/test');
  },

    render: function(){
        return (
              <div className='section-style'>
                  <button className='test-button' onClick={this.takeTest}>Take Test</button>
              </div>
        );
    }
});

module.exports = Welcome;
