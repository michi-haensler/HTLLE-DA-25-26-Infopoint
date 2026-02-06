import { useEffect, useRef, useState } from "react";
import { RouterProvider } from "react-router-dom"; // Import RouterProvider
import Screensaver from "../features/screensaver/Screensaver";
import { router } from "./router";
import "./App.css";

const IDLE_TIMEOUT_MS = 20_000; // 20 Sekunden

export default function App() {
  const [showScreensaver, setShowScreensaver] = useState(true);
  const idleTimer = useRef<number | null>(null);

  // setzt / erneuert den Idle-Timer
  const resetIdleTimer = () => {
    if (idleTimer.current) {
      window.clearTimeout(idleTimer.current);
    }

    idleTimer.current = window.setTimeout(() => {
      setShowScreensaver(true);
    }, IDLE_TIMEOUT_MS);
  };

  // User startet die App
  const handleStart = () => {
    setShowScreensaver(false);
    resetIdleTimer();
  };

  // globale Interaktionen überwachen
  useEffect(() => {
    const events = [
      "mousedown",
      "mousemove",
      "keydown",
      "touchstart",
      "wheel",
    ];

    const onActivity = () => {
      if (!showScreensaver) {
        resetIdleTimer();
      }
    };

    events.forEach((event) =>
      window.addEventListener(event, onActivity)
    );

    return () => {
      events.forEach((event) =>
        window.removeEventListener(event, onActivity)
      );
    };
  }, [showScreensaver]);

  return (
    <>
      {showScreensaver && <Screensaver onStart={handleStart} />}

      {!showScreensaver && <RouterProvider router={router} />}
    </>
  );
}