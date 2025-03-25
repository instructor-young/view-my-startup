import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import CompareMyStartupsPage from "./pages/CompareMyStartupsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/compare/my-startups"
            element={<CompareMyStartupsPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
