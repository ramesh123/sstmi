import TopInfo from "@/components/TopInfo";
import MainHeader from "@/components/MainHeader";
import Navbar from "@/components/Navbar";
import Mantra from "@/components/Mantra";
import Carousel from "@/components/Carousel";
import Sloka from "@/components/Sloka";
import Tiles from "@/components/Tiles";
import Footer from "@/components/Footer";
import FloatingDonateButton from "@/components/FloatingDonateButton";
import Events from "@/components/eventsImportant";

export default function Home() {
  return (
    <>
      {/* <TopInfo /> */}
      <MainHeader />
      <Navbar />
      <div className="gradient-background">
        <Mantra />
        <Carousel />
        <Sloka />

        {/* Heading before Events */}
        <h2 className="text-2xl font-bold text-darkGreen text-center mt-10 mb-0">
          Upcoming Events:
        </h2>
        <div className="-mt-0">
          <Events />
        </div>

        <Tiles />
      </div>
      <Footer />
      <FloatingDonateButton />
    </>
  );
}
