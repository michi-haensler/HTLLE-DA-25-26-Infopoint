import { Outlet, useLocation } from "react-router-dom";
import Header from '../components/header/Header.tsx';

export default function RootLayout() {
  const location = useLocation();

  // Prüfen, ob wir auf der Startseite "/" sind
  const hideHeader = location.pathname === "/";

  return (
    <div>
     {!hideHeader && <Header />}
      <Outlet />
    </div>
  );
}