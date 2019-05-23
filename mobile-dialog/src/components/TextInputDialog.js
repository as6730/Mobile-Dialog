import React, { Component } from "react";
import SettingDialog from './SettingDialog';

class TextInputDialog extends Component {
  render() {
    return (
      <SettingDialog
        title={this.props.title}
        description={this.props.description}
      >
        <input
          id="text_input"
          type="text"
          name="textInput"
          onChange={(e) => this.props.onChange(e.target.value)}/>
      </SettingDialog>
    );
  }
}

export default TextInputDialog;
