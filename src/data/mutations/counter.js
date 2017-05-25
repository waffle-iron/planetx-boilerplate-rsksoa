import { commitMutation, graphql } from 'react-relay';

const mutation = graphql`
  mutation counterMutation($input: CounterInput!) {
              createCounter(input: $input) {
                            id,
                           value
                         }
                       }`;

const getVariables = (vals) => ({input: {...vals}});

export default (environment, variables) => {
  commitMutation(environment, {mutation, variables: getVariables(variables),
    onCompleted: (response) => console.log('Success!'),
  onError: err => console.error(err),}) }