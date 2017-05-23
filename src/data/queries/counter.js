/**
  * React Starter Kit (https://www.reactstarterkit.com/)
  *
  * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE.txt file in the root directory of this source tree.
**/

import CounterType from '../types/CounterType';
import Counter from '../models/Counter';

const me = {
  type: CounterType,
  resolve() { // { request }
    return Counter.findAll({ order: [['updatedAt', 'DESC']], limit: 1 })
      .then(records => (
         records[0] ? { id: records[0].id, value: records[0].value } : { id: 1, value: 0 }
      ));
  },
};

export default me;
