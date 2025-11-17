import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Screensaver from "../features/screensaver/Screensaver";
import { useScreensaver } from "../features/screensaver/ScreensaverContext";

export default function RootLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { active, hide } = useScreensaver();

  const isHome = location.pathname === "/";

  const handleScreensaverClose = () => {
    // Screensaver ausblenden
    hide();
    // Immer auf die Startseite wechseln
    navigate("/");
  };

  return (
    <div>
      {active && <Screensaver onClose={handleScreensaverClose} />}

      {/* Header NICHT auf der Startseite */}
      {!isHome && <Header />}

      <Outlet />
    </div>
  );
}