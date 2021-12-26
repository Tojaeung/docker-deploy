import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import OtherPage from "./OtherPage";
import MainComponent from "./MainComponent";

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <div>안녕~</div>
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other page</Link>
      </header>

      <div className="main">
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="/otherpage" element={<OtherPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
