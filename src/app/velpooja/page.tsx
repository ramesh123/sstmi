import MainHeader from '@/components/TopInfo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingDonateButton from '@/components/FloatingDonateButton';
import Tiles from "@/components/Tiles";



const VelPoojaPage = () => {
  return (
    <>
      <MainHeader />
      <Navbar />
      <div className="gradient-background py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-[#b71b22] mb-4">Vel Pooja</h1>
          <p className="text-lg text-[#035772] mb-6">
            Perform Vel Pooja at Home/Temple
          </p>
          <div className="space-y-4 text-gray-800">
            <p>
              Vel removes all fear and evil, symbolizing divine shakti from Muruga's mother, signifies prosperity and positivity. 
              In temples, abhishekam is often performed solely to the Vel, elevating its significance.
            </p>
            <p>
              The Vel stands independently yet inseparable from Subramanya, symbolizing strength. Vel embodies shree shakthi, 
              with Lalitha Sahasranamam often sung during Vel Pooja.
            </p>
            <p>
              Vel bhandam, a powerful slokam, offers protection and blessings even in everyday settings.
            </p>
            <h2 className="text-2xl font-bold text-[#b71b22]">Scriptural Significance</h2>
            <p>
              Arunagirinathar's <em>"Tiruppugazh"</em> praises Muruga and emphasizes Vel's role in overcoming obstacles, while 
              Pamban Swamigal's hymns highlight the spiritual benefits of Vel worship.
            </p>
            <p>
              Subramanya and his Vel epitomize compassion, offering protection without vanquishing enemies, as echoed in the verse 
              <strong>“Pakaivanikku arulvai nenge”</strong>.
            </p>
            <h2 className="text-2xl font-bold text-[#b71b22]">Worship at Home</h2>
            <p>
              Vel worship at home is simple: heartfelt devotion is paramount, surpassing lengthy rituals. Devout worshippers may 
              contact the temple to obtain the sacred Vel, enhancing the sanctity of their home.
            </p>
          </div>
        </div>
        <Tiles />
      </div>

      <Footer />
      <FloatingDonateButton />
    </>
  );
};

export default VelPoojaPage;
