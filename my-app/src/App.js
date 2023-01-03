import logo from "./logo.svg";
import "./App.css";
import FetchAPI from "./FetchApi";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello! This is Andrew Kuang's AggieWorks take home assignment.</h1>
        <FetchAPI/>
      </header>
    </div>
  );
}

export default App;
