import { BrowserRouter, Routes, Route } from "react-router";
import { GlobalLayout } from "./ui/layout/GlobalLayout";
import { Home } from "./ui/pages/Home";
import { AboutMe } from "./ui/pages/AboutMe";
import { Projects } from "./ui/pages/Projects";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



function App() {
  const queryClient = new QueryClient();


  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<GlobalLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
