'use client'; // Makes this a Client Component
import { useRouter } from 'next/navigation';

export default function FloatingDonateButton() {
  const router = useRouter(); // Move useRouter inside the component

  return (
<button
  onClick={() => router.push('/donate/')}
  className="fixed bottom-20 right-5 md:bottom-10 md:right-10 bg-darkRed text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-brightRed transition-transform transform hover:scale-110 animate-custom-pulse z-50"
  aria-label="Donate"
>
  <i className="fas fa-praying-hands text-lg mr-2"></i>
  Donate
</button>





  );
}
