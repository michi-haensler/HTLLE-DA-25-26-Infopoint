import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import Screensaver from '../features/screensaver/Screensaver.tsx';

export default function App() {
  return (
    <div className="App">
      <Screensaver />          {/* Overlay darf außerhalb liegen */}
      <RouterProvider router={router} />
    </div>
  );
}