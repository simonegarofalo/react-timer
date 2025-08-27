import { Routes, Route } from "react-router";
import AthletePage from "../pages/AthletePage";

import App from "../App";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="athletes/:slug" element={<AthletePage />} />
    </Routes>
  );
}

export default AppRoutes;
