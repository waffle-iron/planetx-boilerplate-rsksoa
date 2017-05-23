/**
  * React Starter Kit (https://www.reactstarterkit.com/)
  *
  * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE.txt file in the root directory of this source tree.
**/

import React from 'react';
import { graphql } from 'relay-runtime';
import Home from './Home';
import Layout from '../../modules/RSK/Layout';

export default {

  path: '/',

  async action({ api }) {
    const data = await api.fetchQuery(graphql`query indexHomeQuery {
      me { ...Layout_me }
      counter { ...Home_counter }
    }`);
    return {
      title: 'React Starter Kit',
      component: <Layout me={data.me}><Home counter={data.counter} /></Layout>,
    };
  },

};
