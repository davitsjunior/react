import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//"COMPONENTE STATLENT (SEM ESTADO)"
function App() {
  //const { reverse } = this.state;
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    //this.setState({ reverse: !reverse });
    setReverse(!reverse);
  };

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h1>Counter: {counter}</h1>
        <p>
          <button type="button" onClick={handleCounter}>
            Counter
          </button>
        </p>
        <p>
          <button type="button" onClick={handleClick}>
            Reverse {reverseClass}
          </button>
        </p>
      </header>
    </div>
  );
}

//COMPONENTE COM ESTADO
/* class App extends Component {
  state = {
    reverse: false,
  };

  handleClick = () => {
    const { reverse } = this.state;
    this.setState({ reverse: !reverse });
  };

  render() {
    const { reverse } = this.state;
    const reverseClass = reverse ? 'reverse' : '';

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
          <button type="button" onClick={this.handleClick}>
            Reverse {reverseClass}
          </button>
        </header>
      </div>
    );
  }
} */

export default App;
