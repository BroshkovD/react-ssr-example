import { connect } from 'react-redux';
import { fetchAdmins } from '../../../store/actions';

import requireAuth from '../../hocs/requireAuth';

import Component from './AdminsListPage'

function mapStateToProps({ admins }) {
  return { admins };
}

export default {
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(Component)),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
};