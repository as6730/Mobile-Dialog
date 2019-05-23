import React, { Component } from 'react';
import Dialog from './Dialog';
import TextInputDialog from './TextInputDialog';
import RadioButtonsDialog from './RadioButtonsDialog';
import DropdownDialog from './DropdownDialog';

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
      <Dialog
        title="Mobile Device Settings"
        onSave={() => this.props.onSave(this.state)}
        dismissModal={this.props.dismissModal}>
        <TextInputDialog
          title="Organization's Administrator's Email Address"
          description="Lorem ipsum"
          onChange={(email) => { this.setState({ email: email }) }}
        />
        <RadioButtonsDialog
          title="User Notifications"
          description="Lorem ipsum"
          options={["Option 1", "Option 2", "Option 3"]}
          onChange={(notification) => { this.setState({ notification: notification }) }}
        />
        <DropdownDialog
          title="Device Identification"
          description="Lorem ipsum"
          options={["Option 1", "Option 2", "Option 3"]}
          onChange={(identification) => { this.setState({ identification: identification }) }}
        />
      </Dialog>
    );
  }
}

export default MobileDeviceSettingsModal;
