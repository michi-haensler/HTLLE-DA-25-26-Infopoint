import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "../pages/HomePage/HomePage";
import InfoPage from "../pages/InfoPage/InfoPage";
import MapPage from "../pages/MapPage/MapPage";
import InstaFeedPage from "../pages/InstaFeedPage/InstaFeedPage";
import TeachersPage from "../pages/TeachersPage/TeachersPage";
import TeacherDetailPage from "../pages/TeacherDetailPage/TeacherDetailPage";
import EventsPage from "../pages/EventsPage/EventsPage";
import StundenplanPage from "../pages/StundenplanPage/StundenplanPage";
import KlassenStundenplanPage  from "../pages/KlassenStundenplanPage/KlassenStundenplanPage";
import ClassDetailPage from "../pages/ClassDetailPage/ClassDetailPage";
import LaborStundenplanPage from "../pages/LaborStundenplanPage/LaborStundenplanPage";
import LaborDetailPage from "../pages/LaborDetailPage/LaborDetailPage";
import NewsDetailPage from "../pages/NewsDetailPage/NewsDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "info", element: <InfoPage /> },
      { path: "map", element: <MapPage /> },
      { path: "news", element: <InfoPage /> },
      { path: "news/:id", element: <NewsDetailPage /> },
      { path: "insta", element: <InstaFeedPage /> },
      { path: "teachers", element: <TeachersPage /> },
      { path: "teachers/:shortCode", element: <TeacherDetailPage /> },
      { path: "events", element: <EventsPage /> },

      { path: "stundenplan", element: <StundenplanPage /> },
      { path: "stundenplan/klassen", element: <KlassenStundenplanPage /> },
      { path: "stundenplan/klassen/:shortCode", element: <ClassDetailPage /> },
      { path: "stundenplan/labore", element: <LaborStundenplanPage /> },
      { path: "laborstundenplan", element: <LaborStundenplanPage /> },
      { path: "laborstundenplan/:id", element: <LaborDetailPage /> },
    ],
  },
]);
