import CigarSection from "@/components/home/CigarSection";
import CigarSpotlight from "@/components/home/CigarSpotlight";
import EventTickets from "@/components/home/EventTickets";
import Footer from "@/components/home/Footer";
import GreenFamily from "@/components/home/GreenFamily";
import GridSection from "@/components/home/GridSection";
import Header from "@/components/home/Header";
import Navbar from "@/components/home/Navbar";
import ProductCategories from "@/components/home/ProductCategories";
import ReviewsSection from "@/components/home/ReviewsSection";
import SubscribeTV from "@/components/home/SubscribeTV";
import TobaccoInfo from "@/components/home/TobaccoInfo";

export default function Home() {
  return (
    
    <div>
      <Header />
      <Navbar />
      <GridSection />
      <ProductCategories />
      <CigarSection />
      <EventTickets />
      <SubscribeTV />
      <CigarSpotlight />
      <GreenFamily />
      <TobaccoInfo />
      <ReviewsSection />
      <Footer />
    </div>
  );
}
