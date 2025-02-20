import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import TrackPageView from "./util/TrackPageView";
import NotFound from "./page/notfound/NotFound";


import "./App.css";

function App() {
 

  return (
    <Router>
      <TrackPageView />
      <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
        {/* Canvas en arrière-plan */}
       

        {/* Contenu des routes au premier plan */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Not" element={<NotFound/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
