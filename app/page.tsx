
import ByteFamily from "@/components/home/ByteFamily";
import Footer from "@/components/home/Footer";
import GoogleMapComponent from "@/components/home/GoogleMap";
import GridSection from "@/components/home/GridSection";
import ProductSpotlight from "@/components/home/ProductSpotlight";
import ReviewsSection from "@/components/home/ReviewsSection";
import TobaccoInfo from "@/components/home/TobaccoInfo";

export default function Home() {
  return (
    
    <div>
      <GridSection />
      <ProductSpotlight />
      <ByteFamily />
      <TobaccoInfo />
      <ReviewsSection />
      <GoogleMapComponent />
      <Footer />
    </div>
  );
}
