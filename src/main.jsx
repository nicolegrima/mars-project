var React = require('react');
var ReactDOM = require('react-dom');

import {Router, Route, browserHistory, Redirect} from 'react-router';


// IMPORTS //

import Question from './components/question.jsx';
import Welcome from './components/welcome.jsx';
import NotFound from './components/404.jsx';

var App = React.createClass ({

    render: function(){
        return (
            <Router history={browserHistory}>
              <Redirect from='/' to='/welcome' />
                <Route path='/welcome' component={Welcome} />
                <Route path='/mars-test' component={Question} />
                <Route path= '*' component={NotFound} />
            </Router>
        )
    }

});

ReactDOM.render(<App />, document.querySelector('.mount-node'));
