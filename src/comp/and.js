import React from 'react';
import Input from './input';
import Output from './output';
import $ from 'jquery';

const And = React.createClass({

  getInitialState () {
    return {
        in1: false,
        in2: false
     };
  },

  componentWillMount () {
    if (this.props.inA) {
      $(document).on(this.props.inA, (a, checked) => this.in1(checked));
    }
    if (this.props.inB) {
      $(document).on(this.props.inB, (a, checked) => this.in2(checked));
    }
  },

  in1 (e) {
    this.setState({in1: e});
  },

  in2 (e) {
    this.setState({in2: e});
  },

  out (checked) {
    $(document).trigger(this.props.name, checked);
  },

  render () {
    return (
      <div className='And'>
        <span>{this.props.name}</span>:
        <Input name='in1' label='A' checked={this.state.in1} onChange={this.in1} />
        <Input name='in2' label='B' checked={this.state.in2} onChange={this.in2} />
        <Output name='out' label='Out' checked={this.state.in1 && this.state.in2} onChange={this.out} />
      </div>
    )
  }

});

export default And;