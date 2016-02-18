'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass ({

render: function(){
  return (
    <div>
      <button>Take Test</button>
    </div>
  )
}
});

ReactDOM.render(<App />, document.querySelector('.mount-node'));


/*<div class="clock">The Clock goes here</div>*/
