var React = require('react');

var Welcome = React.createClass ({

  takeTest() {
      this.props.history.push('/mars-test');
  },

    render: function(){
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
