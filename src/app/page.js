import Hero from "../components/widget/hero";
import PartnersSlider from "../components/slider/partners-slider";
import HowItWorks from "../components/tab-menu/how-it-works";
import FastFashion from "../components/widget/fast-fashion";
import Newsletter from "../components/newsletter";

export default function Home() {
  return (
    <div>
      <Hero />
      <PartnersSlider />
      <HowItWorks />
      <FastFashion />
      <Newsletter />
    </div>
  );
}
