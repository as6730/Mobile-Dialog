import React, { Component } from 'react';
import Dialog from './Dialog';
import TextInputDialog from './TextInputDialog';
import RadioButtonsDialog from './RadioButtonsDialog';
import DropdownDialog from './DropdownDialog';
import './Modal.css'

class MobileDeviceSettingsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      notification: '',
      identification: ''
    }
  }

  render() {
    return (
      <div className="modal-wrapper">
        <Dialog
          title="Mobile Device Settings"
          onSave={() => this.props.onSave(this.state)}
          dismissModal={this.props.dismissModal}>
          <TextInputDialog
            title="Organization's Administrator's Email Address"
            description="This email is for end users to generate problem reports within the Cisco Security Connector app and send these reports to the administrator."
            onChange={(email) => { this.setState({ email: email }) }}
          />
          <RadioButtonsDialog
            title="User Notifications"
            description="Adjust level of notifications shown to users on their device."
            options={["None", "Notify on Protection Failure", "Notify on Protection Change"]}
            onChange={(notification) => { this.setState({ notification: notification }) }}
          />
          <DropdownDialog
            title="Device Identification"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            options={["Full Identification", "By Serial Number Only"]}
            onChange={(identification) => { this.setState({ identification: identification }) }}
          />
        </Dialog>
      </div>
    );
  }
}

export default MobileDeviceSettingsModal;
