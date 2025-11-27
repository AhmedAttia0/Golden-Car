import HeroSection from "../../../components/heroSection/HeroSection";
import InfoHome from "../../../components/infoHome/InfoHome";
import SecondInfoHome from "../../../components/secondInfoHome/SecondInfoHome";
import CarsHome from "../../../components/carsHome/CarsHome";
import NombersHome from "../../../components/nombersHome/NombersHome";
import { useEffect } from "react";
import { httpGet } from "../../../api/http";
const Home = () => {
  useEffect(() => {
    (async () => {
      await httpGet("cars");
    })();
  });
  return (
    <div className="lg:container lg:mx-auto mx-3">
      <HeroSection />
      <div className="flex flex-col gap-14">
        <InfoHome />
        <SecondInfoHome />
        <CarsHome />
        <NombersHome />
      </div>
    </div>
  );
};

export default Home;
