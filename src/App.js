import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      {/* Navbar component */}
      <Navbar />
      <div className="content">
        {/* Home component */}
        <Home />
      </div>
    </div>
  );
}

export default App;
