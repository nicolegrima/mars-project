var React = require('react');

import {browserHistory} from 'react-router';

var Accepted = React.createClass ({

    render: function(){
        return (
          <div className='wrapper'>
              <div className='accepted-style'>
                  <h1 className='pulse'>Accepted!!!</h1>
                  <h2 className="rocket-launch"><i className="fa fa-space-shuttle"></i></h2>
              </div>
          </div>
        )
    }
});

module.exports = Accepted;
