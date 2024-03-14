import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import Home from './Components/Home';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'light'
    };
  }

  toggleMode = () => {
    if (this.state.mode === 'light') {
      this.setState({ mode: 'dark' });
      document.body.style.backgroundColor = '#343a40';
      // showAlert('Dark Mode Enabled', 'success');
    } else {
      this.setState({ mode: 'light' });
      document.body.style.backgroundColor = 'white';
      // showAlert('Light Mode Enabled', 'info');
    }
  };

  pageSize = 5;

  state  = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress : progress })
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar mode={this.state.mode} toggleMode={this.toggleMode}/>     
          <LoadingBar
            loaderSpeed={450}
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/home" element={<Home setProgress = {this.setProgress}/>}></Route>
            <Route exact path='/business' element={<News setProgress = {this.setProgress} mode={this.state.mode} key="business" pageSize={this.pageSize} country="in" category = "Business"/>}></Route>
            <Route exact path='/general' element={<News setProgress = {this.setProgress} mode={this.state.mode} key="general" pageSize={this.pageSize} country="in" category = "General"/>}></Route>            
            <Route exact path='/entertainment' element={<News setProgress = {this.setProgress} mode={this.state.mode} key="entertainment" pageSize={this.pageSize} country="in" category = "Entertainment"/>}></Route>
            <Route exact path='/health' element={<News setProgress = {this.setProgress} mode={this.state.mode} key="health" pageSize={this.pageSize} country="in" category = "Health"/>}></Route>
            <Route exact path='/science' element={<News setProgress = {this.setProgress} mode={this.state.mode} key="science" pageSize={this.pageSize} country="in" category = "Science"/>}></Route>
            <Route exact path='/sports' element={<News setProgress = {this.setProgress} mode={this.state.mode} key="sports" pageSize={this.pageSize} country="in" category = "Sports"/>}></Route>
            <Route exact path='/technology' element={<News setProgress = {this.setProgress} mode={this.state.mode} key="technology" pageSize={this.pageSize} country="in" category = "Technology"/>}></Route>   
          </Routes>
        </Router>
      </div>
    );
  }
}
