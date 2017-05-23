/* Counter by RSK | planetx-boilerplate-rsksoa

  Originally `routes/home/Home.js` ~ Falieson 20170518
*/
/**
  * React Starter Kit (https://www.reactstarterkit.com/)
  *
  * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE.txt file in the root directory of this source tree.
**/

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Counter.css';

class Counter extends React.Component {
  static propTypes = {
    count: PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }).isRequired,
    changeCounter: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { value: this.props.count.value };
  }

  increment = (event) => {
    event.preventDefault();
    const value = this.state.value + 1;
    this.setState({ value });
    this.props.changeCounter({
      id: this.props.count.id,
      value,
    });
  };

  decrement = () => {
    event.preventDefault();
    const value = this.state.value - 1;
    this.setState({ value });
    this.props.changeCounter({
      id: this.props.count.id,
      value,
    });
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h2>React.js Counter</h2>
          <p>Count: {this.state.value}</p>
          <p>
            <button className={s.button} onClick={this.decrement}>Decrement</button>
            <button className={s.button} onClick={this.increment}>Increment</button>
          </p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Counter);
