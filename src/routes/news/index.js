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
import News from './News';
import Layout from '../../modules/RSK/Layout';

export default {

  path: '/news',

  async action({ api }) {
    const data = await api.fetchQuery(graphql`query indexNewsQuery {
      me { ...Layout_me }
      news { ...News_news }
    }`);
    if (!data.news) throw new Error('Failed to load the news feed.');
    return {
      title: 'React Starter Kit News',
      component: <Layout me={data.me}><News news={data.news} /></Layout>,
    };
  },

};
