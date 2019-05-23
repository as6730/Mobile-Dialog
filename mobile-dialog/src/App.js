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
  
  async submit(state) {
    await fetch('http://localhost:3001/submit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state)
    })
    
    this.setState({showModal: false})
  }
  
  render() {
    return (
      <div className="App">
        {this.state.showModal ?
          <MobileDeviceSettingsModal
            dismissModal={() => this.setState({showModal: false})}
            onSave={this.submit.bind(this)}
          />
          :
          <button onClick={() => this.setState({showModal: !this.state.showModal})}>Show Modal</button>
        }
      </div>
    );
  }
}

export default App;
