var React = require('react');

var CountdownTimer = React.createClass({

  getInitialState: function() {
    return {
    secondsRemaining: 60
    };
  },

  resetTimer: function() {
        clearInterval(this.interval);
        this.setState({ secondsRemaining: 60});
        this.start();
  },

  tick: function() {
    this.setState(
    {secondsRemaining: this.state.secondsRemaining - 1}
    );
  },

 start: function(){
      this.interval = setInterval(this.tick, 1000);
    },

  componentDidMount: function() {
    setTimeout(this.start, this.props.timeout)
  },

  render: function() {
    return (
    <p className='clock'> {this.state.secondsRemaining} </p>
    );
  }
});

module.exports = CountdownTimer;

//<button onClick={this.resetTimer}>RESET</button>//
