var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass ({

    render: function(){
        return (
            <div className='wrapper'>

                <div className='aside-style'>
                    <h1>Mars</h1>
                    <div className='rocket'><i className="fa fa-space-shuttle"></i></div>
                </div>

                <div className='section-style'>
                    <button>Take Test</button>
                </div>
          </div>
  )
}

});

ReactDOM.render(<App />, document.querySelector('.mount-node'));
