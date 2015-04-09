import React from 'react';
import Input from './input';
import Output from './output';
import $ from 'jquery';

let timerId = null;

const Delay = React.createClass({

  getInitialState () {
    return {
      in1: false,
      out: false
    };
  },

  componentWillMount () {
    if (this.props.inA) {
      $(document).on(this.props.inA, (a, checked) => this.in1(checked));
    }
  },

  in1 (e) {
    this.setState({in1: e});
    this.trigger();
  },

  trigger () {
    if (timerId) {
      return;
    }
    timerId = setTimeout(() => {
      timerId = null;
      this.setState({out: !this.state.out});
    }, 500)
  },

  out (checked) {
    $(document).trigger(this.props.name, checked);
  },

  render () {
    return (
      <div className='And'>
        <span>{this.props.name}</span>:
        <Input name='in1' label='A' checked={this.state.in1} onChange={this.in1} />
        <Output name='out' label='Out' checked={this.state.out} onChange={this.out} />
      </div>
    )
  }

});

export default Delay;