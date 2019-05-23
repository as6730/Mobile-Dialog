import React, { Component } from "react";

class SettingDialog extends Component {
  render() {
    return (
      <div className="modal-subcontent">
        <div className="modal-subcontent-title">
          {this.props.title}
        </div>
        <div className="modal-subcontent-description">
          {this.props.description}
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default SettingDialog;
