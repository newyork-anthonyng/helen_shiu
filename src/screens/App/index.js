import React, { Component } from 'react';
import styles from './styles.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }

  handleIncrementClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  handleDecrementClick = () => {
    this.setState(prevState => ({
      count: Math.max(0, prevState.count - 1),
    }));
  }

  render() {
    return (
      <div>
        <h1 className={styles.header}>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrementClick}>Increment</button>
        <button onClick={this.handleDecrementClick}>Decrement</button>
      </div>
    );
  }
}

export default App;
