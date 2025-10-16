import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "../pages/HomePage/HomePage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";
import MapPage from "../pages/MapPage/MapPage";
import NewsPage from "../pages/InfoPage/InfoPage";
import InstaFeedPage from "../pages/InstaFeedPage/InstaFeedPage";
import TeachersPage from "../pages/TeachersPage/TeachersPage";
import EventsPage from "../pages/EventsPage/EventsPage";
import InfoPage from "../pages/InfoPage/InfoPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,          // <— Header ist jetzt IM Router
    children: [
      { index: true, element: <HomePage /> },   // statt path: "/" verwendet man index
      { path: "info", element: <InfoPage /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "map", element: <MapPage /> },
      { path: "news", element: <NewsPage /> },
      { path: "insta", element: <InstaFeedPage /> },
      { path: "teachers", element: <TeachersPage /> },
      { path: "events", element: <EventsPage /> },
    ],
  },
]);