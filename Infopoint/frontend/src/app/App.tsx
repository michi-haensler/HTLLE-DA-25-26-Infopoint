import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ScreensaverProvider } from "../features/screensaver/ScreensaverContext.tsx";

export default function App() {
  return (
    <div className="App">
      <ScreensaverProvider>
        <RouterProvider router={router} />
      </ScreensaverProvider>
    </div>
  );
}