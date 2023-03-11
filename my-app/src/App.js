import "./App.css";
import Stock from "./Stock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="container">
          <div className="container">
            <h1 className = "intro">Hello! This is Andrew Kuang's stock graph project.</h1>
            <p>I'm fairly new to web development - so you have to click the Set Stock Ticker button twice. <br></br>(I know this is an issue with useEffect - which I'm learning right now.)
              <br></br>Anyhow, I hope you liked my choice of background image 😉.
              <br></br>The plotly package I used has a lot of tools - try clicking and dragging on the graph. 
              <br></br>Also, the background has *parallax* effect. </p>
              <a href = "https://www.kuangster.co/">My personal website - in progress...</a>
          </div>
        </section>
      </header>

      <div className="container">
        <div className = "stock-container">
        <Stock></Stock>
        </div>
      </div>


      </div>
  );
}

export default App;
