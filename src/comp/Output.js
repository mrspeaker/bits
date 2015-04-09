import React from 'react';

const Output = React.createClass({

  getInitialState () {
    return {
      checked: this.props.checked
    }
  },

  componentWillReceiveProps ({checked}) {
    if (checked !== this.state.checked) {
      this.setState({checked});
      if (this.props.onChange) {
        this.props.onChange(checked);
      }
    }

  },

  render () {
    return (
      <label>
        <input type="checkbox"
          readOnly
          name={this.props.name}
          checked={this.state.checked}
          value={this.props.value} />
        {this.props.label}
      </label>
    )
  }

});

export default Output;