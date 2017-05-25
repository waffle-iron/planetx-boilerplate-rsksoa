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
import { createFragmentContainer } from 'react-relay';
import CounterMutation from "../../data/mutations/counter";
import Counter from '../../modules/RSK/Counter/';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    counter: PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }).isRequired,
  }

  changeCounter = (val) => {
    CounterMutation(this.props.relay.environment, val);
  }


  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>React-Starter-Kit Home</h1>
          <Counter count={this.props.counter} changeCounter={this.changeCounter} />
        </div>
      </div>
    );
  }
}

export default createFragmentContainer(withStyles(s)(Home), graphql`
    fragment Home_counter on Counter {
      id,
      value
    }
  `);
