import './App.css';

function App1() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>
          LET WE SEE THE OUTPUT OF JAVASCRIPT
        </h1>
        <button onClick={window['alertMsg']}>Click me!</button>
      </header>
    </div>
  );
}

export default App1;
