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
  GraphQLInputObjectType,
  GraphQLString
} from 'graphql';

import Counter from '../models/Counter';

const CounterType = new ObjectType({
  name: 'Counter',
  fields: {
    id: { type: new NonNull(ID) },
    value: { type: IntegerType },
    clientMutationId: { type: GraphQLString }
  },
});

const CounterInput = new GraphQLInputObjectType({
  name: "CounterInput",
  fields: {
    id: { type: ID },
    value: { type: IntegerType },
    clientMutationId: { type: GraphQLString }
  }
});

export const CounterMutationType = {
  type: CounterType,
   fields: {
    input: { type: CounterInput }
  },
  args: {
    input: {
      type: CounterInput,
    }
  },
  resolve: (_, args) => {
    return Counter.findById(args.input.id).then((counter) => {
      if(!counter) { return Counter.create(args.input) };
      return counter.update({value: args.input.value});
    });
  }
};

export default CounterType;
