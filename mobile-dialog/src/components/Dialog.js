import React, { Component } from "react";

class Dialog extends Component {
  render() {
    return (
      <div>
        <button className="close-modal-btn" onClick={this.props.dismissModal}>X</button>
        <div className="modal-header">
          {this.props.title}
        </div>
        {this.props.children}
        <div className="modal-footer">
          <button className="btn-secondary" onClick={this.props.dismissModal}>CANCEL</button>
          <button className="btn-primary" id="dialog-btn-save" onClick={this.props.onSave}>SAVE</button>
        </div>
      </div>
    );
  }
}

export default Dialog;
