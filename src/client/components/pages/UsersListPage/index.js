import { connect } from 'react-redux';
import { fetchUsers } from '../../../store/actions';

import Component from './UsersListPage'

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(Component)
};