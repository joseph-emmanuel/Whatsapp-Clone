import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  return (
    //BEM Naming convention will be followed here
    <div className="app">
      {/* <h1> My whats app clonne </h1> */}
      <div className="app_body">
        {/* Sidebar */}
        <Sidebar/>
        {/* Chat */}
      </div>
      </div>
  );
}

export default App;
