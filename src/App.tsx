import { BrowserRouter, Routes, Route } from "react-router-dom";
import GalaxyLists from "./components/GalaxyLists";
import Layout from "./components/Layout";
import ExperimentsList from "./components/ExperimentsList";
import AncientStudieslist from "./components/AncientStudieslist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<GalaxyLists />} />
          <Route path="/experiments" element={<ExperimentsList />} />
          <Route path="/ancient-study" element={<AncientStudieslist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
