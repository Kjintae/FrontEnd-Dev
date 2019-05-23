import React, { Component } from 'react';  // 모듈을 불러올 때 import를 사용
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() { //컴포넌트가 어떻게 생겼는지 정의하는 역할. 객체로 반환
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
        </header>
      </div>
    );
  }
}


export default App; //App Component를 내보낼 때 export를 사용.
