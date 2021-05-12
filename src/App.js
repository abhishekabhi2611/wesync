import logo from './wesync.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <a
          className="App-link"
          href="https://wesync.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open wesync
        </a>
      </header>
    </div>
  );
}

export default App;
