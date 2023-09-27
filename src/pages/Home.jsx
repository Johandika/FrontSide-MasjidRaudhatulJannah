import DivisionSection from "../components/section/home/DivisionSection";
import HeroSection from "../components/section/home/HeroSection";
import HighlighSection from "../components/section/home/HighlighSection";
import HistorySection from "../components/section/home/HistorySection";
import PengurusSection from "../components/section/home/PengurusSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HistorySection />
      <PengurusSection />
      <DivisionSection />
      <HighlighSection />
    </>
  );
};

export default Home;
