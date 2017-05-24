import Relay from 'react-relay/classic';

class CreateCounterMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation _($input: CounterInput!) {
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
      clientMutationId: this.props.id
    };
  }

  getFatQuery() {
    return Relay.QL`fragment on Counter {
        id
        value
      }`;
  }

  getOptimisticResponse() {
    return {
      id: this.props.id,
      value: this.props.value
    }
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
