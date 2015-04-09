import React from 'react';
import Input from './input';
import Output from './output';
import $ from 'jquery';

const Not = React.createClass({

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

  in1 (e) {
    this.setState({in1: e});
  },

  out (checked) {
    $(document).trigger(this.props.name, checked);
  },


  render () {
    return (
      <div className='Or'>
        <span>{this.props.name}</span>:
        <Input name='in1' label='A' checked={this.state.in1} onChange={this.in1} />
        <Output name='out' label='Out' checked={!this.state.in1} onChange={this.out}  />
      </div>
    )
  }

});

export default Not;