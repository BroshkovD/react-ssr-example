import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

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

  head() {
    return (
      <Helmet>
        <title>{`(${this.props.admin.length}) Admins Loaded`}</title>
        <meta property="og:title" content="Admins App" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        <h3>Protected list of admins</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

export default AdminsListPage
