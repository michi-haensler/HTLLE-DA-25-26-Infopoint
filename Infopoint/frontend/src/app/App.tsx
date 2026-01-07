import "./App.css";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import Screensaver from "../features/screensaver/Screensaver";
import { createPortal } from "react-dom";

function ScreensaverGate() {
    const [visible, setVisible] = useState(true);

    // Wir können hier nicht useNavigate nutzen, weil RouterProvider das "root" ist.
    // Lösung: Wir navigieren über window.location (SPA-safe) auf "/" und bleiben im Router.
    // Wenn du unbedingt ohne Reload willst, sag’s — dann bauen wir "router factory" Variante.
    const onStart = () => {
        setVisible(false);
        // Home: Route "/"
        window.history.pushState({}, "", "/");
        // React Router bekommt popstate nicht automatisch -> dispatchen:
        window.dispatchEvent(new PopStateEvent("popstate"));
    };

    if (!visible) return null;

    // Overlay unabhängig vom Layout
    return createPortal(<Screensaver onStart={onStart} />, document.body);
}

export default function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
            <ScreensaverGate />
        </div>
    );
}