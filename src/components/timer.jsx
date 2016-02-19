var React = require('react');

import {Router, Route, browserHistory, Redirect} from 'react-router';

var Timer = React.createClass ({

    render: function(){
        return (
          <div className='clock'>00:00</div>
  )
}

});

module.exports = Timer;
