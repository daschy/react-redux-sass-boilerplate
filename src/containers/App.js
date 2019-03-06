import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, bool } from 'prop-types';
import { start } from '../actions';
import logo from '../assets/logo.svg';
import './App.scss';

class App extends Component {
  static propTypes = {
    start: func,
    isClicking: bool,
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button className="btn btn-primary btn-lg" onClick={() => this.props.start()}>
            {this.props.isClicking ? 'Clicking ...' : 'Click Me' }
          </button>
        </header>
      </div>
    );
  }
}


const mapStateToProps = ({ isClicking }) => ({
  isClicking,
});

export default connect(mapStateToProps, { start })(App);
