import React, { Component } from "react";
import SettingDialog from './SettingDialog';

class RadioButtonsDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedIndex: 0
    }
    this.onChange.bind(this)
    this.props.onChange(this.props.options[this.state.checkedIndex])
  }

  onChange(idx) {
    this.setState({
      checkedIndex: idx
    });
    this.props.onChange(this.props.options[idx])
  }

  render() {
    return (
      <SettingDialog
        title={this.props.title}
        description={this.props.description}
      >
        {this.props.options.map((title, idx) =>
          <div key={idx}>
            <input type="radio"
              checked={this.state.checkedIndex === idx}
              onChange={() => {this.onChange(idx)}} />
            {title}
          </div>
        )}
      </SettingDialog>
    );
  }
}

export default RadioButtonsDialog;
