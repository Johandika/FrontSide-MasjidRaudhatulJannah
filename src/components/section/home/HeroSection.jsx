import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import { droneerje } from "../../../assets/icons";

const HeroSection = () => {
  const el1 = useRef(null);
  const el2 = useRef(null);
  const el3 = useRef(null);

  useEffect(() => {
    const typed1 = new Typed(el1.current, {
      strings: ["RAUDHATUL"],
      typeSpeed: 50,
      backDelay: 3000,
      showCursor: false,
    });

    const typed2 = new Typed(el2.current, {
      strings: ["JANNAH ISLAMIC"],
      typeSpeed: 50,
      startDelay: 1000,
      backDelay: 2000,
      showCursor: false,
    });

    const typed3 = new Typed(el3.current, {
      strings: ["CENTER"],
      startDelay: 2000,
      backDelay: 0,
      typeSpeed: 50,
      showCursor: false,
    });

    return () => {
      typed1.destroy();
      typed2.destroy();
      typed3.destroy();
    };
  }, []);

  return (
    <>
      <div className="relative h-screen ">
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src={droneerje} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white pt-[80px]">
          <span
            className={`text-shadow  sm:text-5xl text-3xl font-bold text-center uh1percase font-poppins uppercase `}
            ref={el1}
          />
          <span
            className={`text-shadow  sm:text-5xl text-3xl font-bold text-center uh1percase font-poppins uppercase `}
            ref={el2}
          />
          <h1
            className={`text-shadow  sm:text-5xl text-3xl font-bold text-center uh1percase font-poppins uppercase `}>
            <span ref={el1}></span>
            <br />
            <span ref={el2}></span>

            <br />
            <span ref={el3}></span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
