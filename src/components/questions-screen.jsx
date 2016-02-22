var React = require('react');

var QuestionsQuiz = React.createClass ({

  // getInitialState: function() {
  //   return {
  //     correctAnswers: 0
  //   };
  // },



      render: function(){
          return (
            <div className="quesBox">

                      <h2>This is where the Question will appear</h2>

                  <form className="quesForm">
                      <input type="text" ref="answer" value="" required/>
                      <button>Submit Answer</button>
                  </form>
          </div>
          )
      }
  });

// Questions.propTypes = {
//   questions: React.PropTypes.arrayOf(React.propTypes.string.isRequired).isRequired
// }

module.exports = QuestionsQuiz;

    //
    // questionsTrio: function() {
    //     return [
    //       {
    //         question: "Mars is home to the tallest mountain in the solar system: True or False?",
    //         answer: "true"
    //       },
    //       {
    //         question: "Mars has the largest dust storms in the solar system: True or False?",
    //         answer: "true"
    //       },
    //       {
    //         question: "Mars and Earth have approximately the same landmass: True or False?",
    //         answer: "true"
    //       }
    //     ]
    // },

    // answerReceived: function() {
    //   event.preventDefault();
    //   var answer = this.refs.answer.value;
    // },

    // tallyCorrectAnswer: function() {
    //   if (answer === "true") {
    //   this.setState({correctAnswers: this.state.correctAnswers + 1});
    // } else {
    //   this.setState({correctAnswers: this.state.correctAnswers});
    // }
    // },

//     render: function(){
//         return (
//           <form className="quesForm" onSubmit={this.answerReceived}>
//             {/*<h2>{this.questionsTrio.question}</h2>*/}
//             <input type="text" ref="answer" value="" required/>
//           </form>
//         )
//     }
// });
