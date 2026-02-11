import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import GalaxyLists from "./components/GalaxyLists";
import ExperimentsList from "./components/ExperimentsList";
import AncientStudieslist from "./components/AncientStudiesList";

import UserList from "./APIExamples/components/UserList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<GalaxyLists />} />
          <Route path="/experiments" element={<ExperimentsList />} />
          <Route path="/ancient-study" element={<AncientStudieslist />} />

          <Route path="/api/users" element={<UserList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
