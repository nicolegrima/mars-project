var React = require('react');

var Questions = React.createClass ({

questions: function() {
 return [
   {question: "Mars is home to the tallest mountain in the solar system: True or False?", answer: "True"},
   {question: "Mars has the largest dust storms in the solar system: True or False?", answer: "True"},
   {question: "Mars and Earth have approximately the same landmass: True or False?", answer: "True"}
 ]
},
    render: function(){
        return (
          <div>{this.questions}</div>;
        )
    }
});
