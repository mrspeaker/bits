import React from 'react';

const Input = React.createClass({

  handleChange (e) {
    this.props.onChange(e.target.checked);
  },

  render () {
    return (
      <label>
        <input type="checkbox"
          name={this.props.name}
          checked={this.props.checked}
          onChange={this.handleChange}
          value={this.props.value} />
        {this.props.label}
      </label>
    )
  }

});

export default Input;