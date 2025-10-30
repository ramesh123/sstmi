import TopInfo from '@/components/TopInfo';
import MainHeader from '@/components/TopInfo';
import Navbar from '@/components/Navbar';
import Gallery from '@/components/gallery';
import Tiles from '@/components/Tiles';
import Footer from '@/components/Footer';
import FloatingDonateButton from '@/components/FloatingDonateButton';

export default function Home() {
  return (
    <>
      {/* <TopInfo /> */}
      <MainHeader />
      <Navbar />
      <div className="gradient-background">

        <Gallery />
      <Tiles />
      </div>
      <Footer />
      <FloatingDonateButton />
    </>
  );
}
