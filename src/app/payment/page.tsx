"use client"; // add this if using Next.js App Router (app/ directory)

import { useEffect, useState } from 'react';
import MainHeader from '@/components/TopInfo';
import Navbar from '@/components/Navbar';
import UserPayment from '@/components/userPayment';
import Footer from '@/components/Footer';

export default function Payment() {
  const [initialName, setInitialName] = useState('');
  const [initialEmail, setInitialEmail] = useState('');
  const [initialAmount, setInitialAmount] = useState('');

  useEffect(() => {
    // only run in the browser
    const user = sessionStorage.getItem('user');
    const cart = localStorage.getItem('shoppingCart');

    if (user) {
      const userData = JSON.parse(user);
      setInitialName(userData.name);
      setInitialEmail(userData.email);
    }

    if (cart) {
      const cartItems = JSON.parse(cart);
      const total = cartItems.reduce(
        (total: number, item: any) => total + item.price * item.quantity,
        0
      );
      setInitialAmount(total);
    }
  }, []);

  return (
    <>
      <MainHeader />
      <Navbar />
      <div className="gradient-background">
        {initialEmail && initialAmount !='' && (
          <UserPayment
            initialName={initialName}
            initialEmail={initialEmail}
            initialAmount={initialAmount}
          />
        )}
      </div>
      <Footer />
    </>
  );
}