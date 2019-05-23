import React, { Component } from "react";
import './Dialog.css';

class Dialog extends Component {
  render() {
    return (
      <div className="dialog-container">
        <button onClick={this.props.dismissModal}>X</button>
        <div className="dialog-header">
          {this.props.title}
        </div>
        {this.props.children}
        <button onClick={this.props.dismissModal}>Cancel</button>
        <button id="dialog-btn-save" onClick={this.props.onSave}>Save</button>
      </div>
    );
  }
}

export default Dialog;
