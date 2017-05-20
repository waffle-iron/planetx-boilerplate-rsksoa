/**
  * React Starter Kit (https://www.reactstarterkit.com/)
  *
  * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE.txt file in the root directory of this source tree.
*/

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { graphql, createFragmentContainer } from 'react-relay';
import RSKNews from '../../modules/RSK/News/';
import s from './News.css';

class News extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      content: PropTypes.string,
    })).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>React-Starter-Kit News</h1>
          <RSKNews records={this.props.news} />
        </div>
      </div>
    );
  }
}

export default createFragmentContainer(withStyles(s)(News), graphql`
  fragment News_news on NewsItem @relay(plural: true) {
    title
    link
    author
    pubDate
    content
  }
`);
