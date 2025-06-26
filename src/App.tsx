import { Routes, Route } from "react-router";
import { GlobalLayout } from "./ui/layout/GlobalLayout";
import { Home } from "./ui/pages/Home";
import { AboutMe } from "./ui/pages/AboutMe";
import { Projects } from "./ui/pages/Projects";
import { GlobalProviders } from "./ui/providers/GlobalProviders";



function App() {
  return (
    <GlobalProviders>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </GlobalProviders>
  )
}

export default App
