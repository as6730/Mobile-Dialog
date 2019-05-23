import React, { Component } from "react";
import SettingDialog from './SettingDialog';

class DropdownDialog extends Component {
  constructor(props) {
    super(props);
    this.onChange.bind(this)
    this.props.onChange(this.props.options[0])
  }

  onChange(value) {
    this.props.onChange(value)
  }

  render() {
    return (
      <SettingDialog
        title={this.props.title}
        description={this.props.description}
      >
        <select onChange={(e) => {this.onChange(e.target.value)}}>
          {this.props.options.map((title, idx) =>
              <option key={idx} value={title}>
                {title}
              </option>
          )}
        </select>
      </SettingDialog>
    );
  }
}

export default DropdownDialog;
