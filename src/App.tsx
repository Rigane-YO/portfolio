import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import TrackPageView from "./util/TrackPageView";

// Lazy loading des composants
const Home = lazy(() => import("./component/Home"));

import "./App.css";

function App() {
  return (
    <Router>
      <TrackPageView />
      <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
        {/* Canvas en arrière-plan */}
       

        {/* Contenu des routes au premier plan */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
