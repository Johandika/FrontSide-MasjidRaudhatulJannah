import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
import Donasi from "../pages/Donasi";
import Kegiatan from "../pages/Kegiatan";
import DiklatJenazah from "../pages/DiklatJenazah";
import DiklatPraNikah from "../pages/DiklatPraNikah";
import DiklatShalat from "../pages/DiklatShalat";
import KelasBahasaArab from "../pages/KelasBahasaArab";
import LinkKajian from "../pages/LinkKajian";
import TahsinAnak from "../pages/TahsinAnak";
import TahsinIkhwan from "../pages/TahsinIkhwan";
import Kajian from "../pages/Kajian";
import LinkTablighAkbar from "../pages/LinkTablighAkbar";
import ScrollToTop from "../ScrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Layout />
        <ScrollToTop /> {/* ScrollToTop agar setiap pindah halaman dimulai dari atas */}
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/diklatJenazah",
        element: <DiklatJenazah />,
      },
      {
        path: "/diklatPraNikah",
        element: <DiklatPraNikah />,
      },
      {
        path: "/diklatShalat",
        element: <DiklatShalat />,
      },
      {
        path: "/bahasaArab",
        element: <KelasBahasaArab />,
      },
      {
        path: "/linkKajianRutin",
        element: <LinkKajian />,
      },
      {
        path: "/linkKajianTablighAkbar",
        element: <LinkTablighAkbar />,
      },
      {
        path: "/tahsin",
        element: <TahsinIkhwan />,
      },
      {
        path: "/kajian",
        element: <Kajian />,
      },
      {
        path: "/kegiatan",
        element: <Kegiatan />,
      },
      {
        path: "/donasi",
        element: <Donasi />,
      },
    ],
  },
]);

export default router;
