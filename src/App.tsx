import "./language/config";

import { Routes, Route } from "react-router";
import { GlobalLayout } from "./ui/layout/GlobalLayout";
import { Home } from "./ui/pages/Home";
import { GlobalProviders } from "./ui/providers/GlobalProviders";
import { ProjectDetails } from "./ui/pages/ProjectDetails";



function App() {
  return (
    <GlobalProviders>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </GlobalProviders>
  )
}

export default App
