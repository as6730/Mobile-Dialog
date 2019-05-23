import React, { Component } from "react";
import './Dialog.css';

class Dialog extends Component {
  render() {
    return (
      <div className="dialog-container">
        <button>X</button>
        <div className="dialog-header">
          {this.props.title}
        </div>
        {this.props.children}
        <button>Cancel</button>
        <button onClick={this.props.onSave}>Save</button>
      </div>
    );
  }
}

export default Dialog;
