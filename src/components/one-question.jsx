var React = require('react');

var Question = React.createClass({

  handleTrue: function() {
    this.props.onAnswer(true);
  },

  render: function() {
     return (
        <div className='quesForm'>
          <p>{this.props.currentQuestion.question}</p>
          <button className='yesNoButton' onClick={this.handleTrue}>True</button>
          <button className='yesNoButton' onClick={() => this.props.onAnswer(false)}>False</button>
        </div>
      );
  }

});

Question.propTypes = {
currentQuestion: React.PropTypes.shape({
    question: React.PropTypes.string.isRequired,
    answer: React.PropTypes.bool.isRequired
}).isRequired,
onAnswer: React.PropTypes.func.isRequired
};

  module.exports = Question;
