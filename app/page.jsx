import Header from "./components/Header";
import Hero from "./components/Hero";
import TrendingCities from "./components/TrendingCities";
import EverythingYouNeed from "./components/EverythingYouNeed";
import FeaturedVenues from "./components/FeaturedVenues";
import ChooseWithConfidence from "./components/ChooseWithConfidence";
import AIConcierge from "./components/AIConcierge";
import BudgetCalculator from "./components/BudgetCalculator";
import HeirloomGallery from "./components/HeirloomGallery";
import LoveStories from "./components/LoveStories";
import MobileApp from "./components/MobileApp";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrendingCities />
      <EverythingYouNeed />
      <FeaturedVenues />
      <ChooseWithConfidence />
      <AIConcierge />
      <BudgetCalculator />
      <HeirloomGallery />
      <LoveStories />
      <MobileApp />
      <Footer />
    </main>
  );
}