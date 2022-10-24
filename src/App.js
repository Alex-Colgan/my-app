import logo from './logo.svg';
import './App.css';
import Cat from './components/Cat';
import Dog from './components/Dog';

function App() {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{backgroundColor: "Red"}}>Hello, this is my first React app.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src='https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg' alt='Tripadviser pic'></img>
        <Cat />
        <Cat />
        <Cat />
        <Dog />
        <div>
          <h3 style={myStyle}>Hello my style!</h3>
        </div>
      </header>
    </div>
  );
}

export default App;
