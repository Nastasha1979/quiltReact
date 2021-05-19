import React, { Component } from 'react';
import {BrowserRouter} from "react-router-dom";
import SwitchComponent from "./components/SwitchComponent";
import './Styles.scss';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
          <SwitchComponent />
      </BrowserRouter>
    );
  }
}

export default App;
