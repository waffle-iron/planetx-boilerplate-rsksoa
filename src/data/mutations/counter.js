import Relay from 'react-relay/classic';

class CreateCounterMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation CreateCounterMutation($input: CounterInput!) {
      createCounter(input: $input) {
        id,
        value
      }
    }`;
  }

  getVariables() {
    return {
      id: this.props.id,
      value: this.props.value,
    };
  }

  getFatQuery() {
    return Relay.QL`fragment on CounterPayload {
        id
        value
      }`;
  }

  getConfigs() {
    return [{
      type: 'FIELDS_CHANGE',
      fieldIDs: {
        id: this.props.id,
      },
    }];
  }
}

export default CreateCounterMutation;
