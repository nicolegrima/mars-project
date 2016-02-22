var React = require('react');

import {browserHistory} from 'react-router';

var Rejected = React.createClass ({

    render: function(){
        return (
          <div className='wrapper'>
              <div className='rejected-style'>
                  <h1 className='pulse'>Rejected!!!</h1>
              </div>
          </div>
        )
    }
});

module.exports = Rejected;
