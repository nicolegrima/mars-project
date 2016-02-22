var React = require('react');

var Question = React.createClass({

  handleTrue: function() {
    this.props.onAnswer(true);
  },

  render: function() {
     return (
        <div>
          <p>{this.props.currentQuestion.question}</p>
          <button onClick={this.handleTrue}>True</button>
          <button onClick={() => this.props.onAnswer(false)}>False</button>
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
