/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
} from 'graphql';

import { mutationWithClientMutationId } from 'graphql-relay';
import me from './queries/me';
import news from './queries/news';
import counter from './queries/counter';
import Counter from './models/Counter';
import CounterType, { CounterMutationType } from './types/CounterType';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      me,
      news,
      counter,
    },
  }),
  mutation: new ObjectType({
    name: 'Mutation',
    fields: {
      createCounter: CounterMutationType
    }
  })
});

export default schema;
