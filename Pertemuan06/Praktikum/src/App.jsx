import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LayoutDashboard } from "./components/layouts/LayoutDashboard";
import { MahasiswaPage } from "./pages/MahasiswaPage";
// import { HomePage } from "./pages/HomePage";
// import { SettingsPage } from "./";

export default function App() {
  return (
    <Router>
      <LayoutDashboard>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* <Route path="/settings" element={<SettingsPage />} /> */}
          <Route path="/mahasiswa" element={<MahasiswaPage />} />
        </Routes>
      </LayoutDashboard>
    </Router>
  );
}