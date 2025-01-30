import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import TrackPageView from "./util/TrackPageView";
import './App.css'

function App() {
  return (
    <Router>
       <TrackPageView />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
