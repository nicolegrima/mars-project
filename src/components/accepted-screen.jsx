var React = require('react');

import {browserHistory} from 'react-router';

var Accepted = React.createClass ({

    render: function(){
        return (
          <div className='wrapper'>
              <div className='accepted-style'>
                  <h1 className='pulse'>Accepted!!!</h1>
              </div>
          </div>
        )
    }
});

module.exports = Accepted;
