import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
import Donasi from "../pages/Donasi";
import Kegiatan from "../pages/Kegiatan";
import DiklatJenazah from "../pages/DiklatJenazah";
import DiklatPraNikah from "../pages/DiklatPraNikah";
import DiklatShalat from "../pages/DiklatShalat";
import KelasBahasaArab from "../pages/KelasBahasaArab";
import LinkKajian from "../pages/LinkKajian";
import TahsinIkhwan from "../pages/TahsinIkhwan";
import Kajian from "../pages/Kajian";
import LinkTablighAkbar from "../pages/LinkTablighAkbar";
import ScrollToTop from "../ScrollToTop";
import LinkKajianDetail from "../pages/LinkKajianDetail";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Layout />
        {/* ScrollToTop agar setiap pindah halaman dimulai dari atas */}
        <ScrollToTop />{" "}
      </>
    ),
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
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
        path: "/linkKajianRutin/:id",
        element: <LinkKajianDetail />,
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
