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
// import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  increment = (event) => {
    event.preventDefault();
    this.setState({ value: this.state.value += 1 });
  };

  decrement = () => {
    event.preventDefault();
    this.setState({ value: this.state.value -= 1 });
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h2>React.js Counter</h2>
          <p>Count: {this.state.value}</p>
          <p>
            <button className={s.button} onClick={this.increment}>Increment</button>
            <button className={s.button} onClick={this.decrement}>Decrement</button>
          </p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Counter);
