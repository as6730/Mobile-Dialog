import React, { Component } from 'react';
import MobileDeviceSettingsModal from './components/MobileDeviceSettingsModal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }
  
  render() {
    return (
      <div className="App">
        {this.state.showModal ?
          <MobileDeviceSettingsModal
            dismissModal={() => this.setState({showModal: false})}
          />
          :
          <button onClick={() => this.setState({showModal: !this.state.showModal})}>Show Modal</button>
        }
      </div>
    );
  }
}

export default App;
