import logo from './logo.svg';
import './App.css';
import Cat from './components/Cat';
import Dog from './components/Dog';
import Title from './components/Title'

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
        <Title>
          My Title.
          {/*This is my first react app, the text inside the Title tags are the children props.*/}
          </Title>
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
        <div className='flex'>
        <Cat colour="brown" name="Tabitha" lackOfCommonSense={true} textColour="#000" />
        <Cat colour="red" name="Mog" lackOfCommonSense={false} />
        <Cat colour="yellow" name="Sam" lackOfCommonSense={true} />
        </div>
        <div className='flex'>
        <Dog colour="black" name="Cwtch" breed="Labrador" dogYears={4} />
        </div>
        <div>
          <h3 style={myStyle}>Hello my style!</h3>
        </div>
      </header>
    </div>
  );
}

export default App;
