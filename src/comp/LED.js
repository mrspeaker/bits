import React from 'react';
import Input from './input';
import Output from './output';

const LED = React.createClass({

  getInitialState () {
    return {
        in1: false
     };
  },

  componentWillMount () {
    if (this.props.inA) {
      $(document).on(this.props.inA, (a, checked) => this.in1(checked));
    }
  },

  in1 (checked) {
    this.setState({in1:checked});
  },

  render () {
    return (
      <div className={"LED " + (this.state.in1 ? "lit" : "unlit")}>
        <span></span>
      </div>
    )
  }

});

export default LED;