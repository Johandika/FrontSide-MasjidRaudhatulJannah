import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import Home from "../pages/Home";
import JadwalKajian from "../pages/JadwalKajian";
import JadwalTahsin from "../pages/JadwalTahsin";
import Layout from "../components/layout/Layout";
import Donasi from "../pages/Donasi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jadwalkajian",
        element: <JadwalKajian />,
      },
      {
        path: "/jadwaltahsin",
        element: <JadwalTahsin />,
      },
      {
        path: "/donasi",
        element: <Donasi />,
      },
    ],
  },
]);

export default router;
