'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass ({


render: function(){
  return (
    <div>
      <div class="clock">The Clock goes here</THE></div>
      <button>Take Test</button>
    </div>


  );
}
});



// Load to DOM in <div of class name .mount-node>
ReactDOM.render(<App />, document.querySelector('.mount-node'));
