import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import CompareDashboardPage from "./pages/CompareDashboardPage";
import CompareMyStartupsPage from "./pages/CompareMyStartupsPage";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import StartupDetailPage from "./pages/StartupDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/startup/:startupId" element={<StartupDetailPage />} />
          <Route
            path="/compare/my-startups"
            element={<CompareMyStartupsPage />}
          />
          <Route path="/compare/dashboard" element={<CompareDashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
