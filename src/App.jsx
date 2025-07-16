import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import MountainBiking from "./components/pages/home/mountainbiking/MountainBiking";
import RoadBiking from "./components/pages/home/roadbiking/RoadBiking";
import PageNotFound from "./components/pages/partials/PageNotFound";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/mountain-biking" element={<MountainBiking />} />
          <Route path="/road-biking" element={<RoadBiking />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
