import React from 'react';
import User from './User';

var ActiveUsers = React.createClass({
  getDefaultProps: function () {
    return {
      list: []
    }
  },

  render: function () {

    var activeUsers = this.props.list.map(function (user, idx) {
      return (<User key={idx} fb_id={user.fb_id} firstName={user.first_name} lastName={user.last_name} />);
    });

    return (
      <div className="active-users">
        {activeUsers}
      </div>
    );
  }
});

export default ActiveUsers;
