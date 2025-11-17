import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "../pages/HomePage/HomePage";
import InfoPage from "../pages/InfoPage/InfoPage";
import MapPage from "../pages/MapPage/MapPage";
import NewsPage from "../pages/InfoPage/InfoPage";
import InstaFeedPage from "../pages/InstaFeedPage/InstaFeedPage";
import TeachersPage from "../pages/TeachersPage/TeachersPage";
import EventsPage from "../pages/EventsPage/EventsPage";
import StundenplanPage from "../pages/StundenplanPage/StundenplanPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "info", element: <InfoPage /> },
      { path: "map", element: <MapPage /> },
      { path: "news", element: <NewsPage /> },
      { path: "insta", element: <InstaFeedPage /> },
      { path: "teachers", element: <TeachersPage /> },
      { path: "events", element: <EventsPage /> },
      { path: "stundenplan", element: <StundenplanPage /> },
    ],
  },
]);