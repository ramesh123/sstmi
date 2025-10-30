import TopInfo from '@/components/TopInfo';
import MainHeader from '@/components/TopInfo';
import Navbar from '@/components/Navbar';
import Checkout from '@/components/donate'
import Footer from '@/components/Footer';

export default function donate() {
  return (
    <>
      {/* <TopInfo /> */}
      <MainHeader />
      <Navbar />
      <div className="gradient-background">
      <Checkout />
      </div>
      <Footer />
    </>
  );
}
