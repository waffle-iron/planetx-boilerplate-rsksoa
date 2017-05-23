/**
  * React Starter Kit (https://www.reactstarterkit.com/)
  *
  * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE.txt file in the root directory of this source tree.
**/

import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLInt as IntegerType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const CounterType = new ObjectType({
  name: 'Counter',
  fields: {
    id: { type: new NonNull(ID) },
    value: { type: IntegerType },
  },
});

export default CounterType;
