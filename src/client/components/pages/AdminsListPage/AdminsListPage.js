import React, { Component } from 'react';

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    const { admins } = this.props;
    
    return admins.map(admin => (
      <li key={admin.id}>{admin.name}</li>
    ))
  }

  render() {
    return (
      <div>
        <h3>Protected list of admins</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

export default AdminsListPage
