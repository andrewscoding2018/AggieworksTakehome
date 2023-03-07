import logo from "./logo.svg";
import "./App.css";
import FetchAPI from "./FetchApi";
import FetchTiingo from "./FetchTiingo.js"
import FetchPolygon from "./FetchPolygon.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello! This is Andrew Kuang's stock graph project.</h1>
        <FetchPolygon/>
      </header>
    </div>
  );
}

export default App;
