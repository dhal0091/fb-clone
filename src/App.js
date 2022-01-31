import "./App.css";
import Header from "./Components/Header.js";
import Sidebar from "./Components/Sidebar.js";
import Feed from "./Components/Feed.js";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
        {/* {Widgets} */}
      </div>
    </div>
  );
}

export default App;
