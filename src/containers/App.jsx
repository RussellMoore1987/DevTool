import React, {Component} from 'react';
import GlobalState from "../context/GlobalState";
import Layout from "../components/Layout/Layout.jsx";
import './App.css';

class App extends Component {

  render() {
    return (
      <GlobalState>
        <Layout />
      </GlobalState>
    );
  }
}

export default App;
