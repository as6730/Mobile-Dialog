import React, { Component } from "react";
import './SettingDialog.css';

class SettingDialog extends Component {
  render() {
    return (
      <div className="setting-dialog-container">
        <div className="setting-dialog-title">
          {this.props.title}
        </div>
        <div className="setting-dialog-description">
          {this.props.description}
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default SettingDialog;
