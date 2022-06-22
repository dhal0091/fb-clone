import "./App.css";
import Header from "./Components/Header.js";
import Sidebar from "./Components/Sidebar.js";
import Feed from "./Components/Feed.js";
import Widgets from "./Components/Widgets.js";
import Login from "./Components/Login.js";

function App() {
  const user = null;
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
