import "./App.css";
import MainDash from "./components/sidebar/MainDash/MainDash";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
      </div>
      <MainDash/>
    </div>
  );
}

export default App;
