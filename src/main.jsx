var React = require('react');
var ReactDOM = require('react-dom');

import {Router, Route, browserHistory, Redirect} from 'react-router';

// IMPORTS //

import Welcome from './components/welcome-screen.jsx';
import MarsTest from './components/evaluation-screen.jsx'
import CountdownTimer from './components/countdown-timer.jsx';
import Accepted from './components/accepted-screen';
import Rejected from './components/rejetcted-screen';
import NotFound from './components/404.jsx';

var App = React.createClass ({

    render: function(){
        return (
            <Router history={browserHistory}>
              <Redirect from='/' to='/welcome-screen' />
                <Route path='/welcome-screen' component={Welcome} />
                <Route path='/evaluation-screen' component={MarsTest} />
                <Route path='/countdown-timer' component={CountdownTimer} />
                <Route path='/accepted-screen' component={Accepted} />
                <Route path='/rejected-screen' component={Rejected} />
                <Route path= '*' component={NotFound} />
            </Router>
        )
    }

});

ReactDOM.render(<App />, document.querySelector('.mount-node'));
