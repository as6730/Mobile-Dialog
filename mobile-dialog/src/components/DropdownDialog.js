import React, { Component } from "react";
import SettingDialog from './SettingDialog';
import Dropdown from 'react-dropdown';
import './DropdownStyles.css';

class DropdownDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.options[0]
    }
    this.onChange.bind(this)
    this.props.onChange(this.state.selected)
  }

  onChange(value) {
    this.setState({
      selected: value
    });
    this.props.onChange(value)
  }


  render() {
    return (
      <SettingDialog
        title={this.props.title}
        description={this.props.description}
      >
        <Dropdown
          className="dropdown-container"
          arrowClassName="my-dropdown-control"
          options={this.props.options}
          onChange={(option) => {this.onChange(option.label)}}
          value={this.state.selected} />
      </SettingDialog>
    );
  }
}

export default DropdownDialog;
