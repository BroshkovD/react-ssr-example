import React from 'react';
import App from '../App';
import HomePage from '../components/pages/HomePage';
import UsersListPage from '../components/pages/UsersListPage';
import AdminsListPage from '../components/pages/AdminsListPage';
import NotFoundPage from '../components/pages/NotFoundPage';

import { root, users, admins } from './routesConstants';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: root,
        exact: true
      },
      {
        ...UsersListPage,
        path: users
      },
      {
        ...AdminsListPage,
        path: admins
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
