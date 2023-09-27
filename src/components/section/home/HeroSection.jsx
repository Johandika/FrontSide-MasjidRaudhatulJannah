import { droneerje } from "../../../assets/icons";

const HeroSection = () => {
  return (
    <>
      <div className="relative h-screen pt-[80px]">
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src={droneerje} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white pt-[80px]">
          <h1
            className={`text-shadow  sm:text-5xl text-3xl font-bold text-center uh1percase font-poppins uppercase `}>
            Raudhatul
            <br />
            Jannah Islamic <br />
            Center
          </h1>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
