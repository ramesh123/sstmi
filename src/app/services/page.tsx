"use client";
import { useEffect, useState } from "react";
import MainHeader from '@/components/TopInfo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Category {
  id: string;
  name: string;
}

interface Service {
  id: string;
  name: string;
  price: number;
  category: string;
  bgColor: string;
  borderColor: string;
}

interface CartItem extends Service {
  quantity: number;
}

const cartArray = {
  SevaServices: [
    { name: "Punyahavachanam", donation_usd: 108 },
    { name: "Namakaranam (Naming ceremony)", donation_usd: 51 },
    { name: "Annaprashanam", donation_usd: 31 },
    { name: "Kesha Kandana (Hair offering)", donation_usd: 31 },
    { name: "Akshara Abhyasam", donation_usd: 31 },
    { name: "Upanayanam", donation_usd: 201 },
    { name: "Nischitartham (Betrothal ceremony)", donation_usd: 151 },
    { name: "Hindu Wedding", donation_usd: 251 },
    { name: "Seemantam", donation_usd: 151 },
    { name: "Shashtipoorti Shanti (60th Birthday)", donation_usd: 201 },
    { name: "Bhimaratha Shanthi (70th Birthday)", donation_usd: 201 },
    { name: "Shathabhishekam (80th Birthday)", donation_usd: 201 },
    { name: "Sathyanarayana Vratham", donation_usd: 108 },
    { name: "Gruhapravesham, Vaastu Shanti", donation_usd: 151 },
    { name: "Thirupaavai Ghoshti", donation_usd: 151 },
    { name: "Hanuman Chalisa 108 times", donation_usd: 251 }
  ],
  Kalyanams: [
    { name: "Valli Devasena Sahita Sri Subrahmanya Swamy Kalyanam", donation_usd: 251 },
    { name: "SivaParvathi Kalyanam", donation_usd: 251 },
    { name: "Sri SitaRama Kalayanam", donation_usd: 251 },
    { name: "Sri Godha Kalayanam", donation_usd: 251 },
    { name: "Sri Srinivasa Kalayanam", donation_usd: 251 }
  ],
  Homams: [
    { name: "Gana Homam", donation_usd: 108 },
    { name: "Navagraha & Shanthi Homam", donation_usd: 108 },
    { name: "Kujagraha Shanthi Homam", donation_usd: 151 },
    { name: "Asleshabali Pooja & Sarpasanthi Homam", donation_usd: 251 },
    { name: "Shathru Samhara Homam", donation_usd: 251 },
    { name: "Aayusha Homam", donation_usd: 151 },
    { name: "Sri Sarasvati/Sri Lakshmi Hayagriva Homam", donation_usd: 108 },
    { name: "Sri AstaLakshmi Homam", donation_usd: 108 },
    { name: "Rudra Homam", donation_usd: 151 },
    { name: "Maha Mrutyunjaya Homam", donation_usd: 151 },
    { name: "Manyusukta Homam", donation_usd: 108 },
    { name: "Maha Sudarshana Homam", donation_usd: 151 },
    { name: "Raama Tharaka Homam", donation_usd: 108 },
    { name: "Dhanvantari Homam", donation_usd: 108 },
    { name: "Durga Homam", donation_usd: 108 },
    { name: "Chandi Homam", donation_usd: 251 },
    { name: "Gruhapravesham, Vaastu Shanti", donation_usd: 151 }
  ]
};


export default function ServicesLayout() {
  //const [cartArray, setCartArray] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCheckout, setShowCheckout] = useState<boolean>(false);
  const router = useRouter();

  const categories: Category[] = Object.keys(cartArray).map(key => ({
    id: key,
    name: key.replace(/([A-Z])/g, ' $1').trim(),
  }));

  const services: Service[] = Object.entries(cartArray).flatMap(([category, items]) =>
    items.map((item, index) => ({
      id: `${category}-${index}`,
      name: item.name,
      price: item.donation_usd,
      category: category,
      bgColor: '#FFF3E0',
      borderColor: '#FFB74D'
    }))
  );

  // useEffect(() => {
  //     fetch("https://sstmi-admin-portal.s3.us-east-1.amazonaws.com/data/services.json")
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Failed to fetch data");
  //         }
  //         return response.json();
  //       })
  //       .then((data: any[]) => setCartArray(data))
  //       .catch((error) => console.error("Error loading Sevas data:", error));
  //   }, []);

  useEffect(() => {
    const savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  }, [cart]);

  const filteredServices: Service[] = selectedCategory === 'all'
    ? services
    : services.filter(s => s.category === selectedCategory);

  // Cart functions
  const addToCart = (service: Service): void => {
    const existingItem = cart.find(item => item.id === service.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === service.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...service, quantity: 1 }]);
    }
  };

  const removeFromCart = (serviceId: string): void => {
    setCart(cart.filter(item => item.id !== serviceId));
  };

  const updateQuantity = (serviceId: string, newQuantity: number): void => {
    if (newQuantity <= 0) {
      removeFromCart(serviceId);
    } else {
      setCart(cart.map(item =>
        item.id === serviceId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const getTotalPrice = (): number => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = (): number => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = (): void => {
    setCart([]);
    localStorage.removeItem('shoppingCart');
  };

  const placeorder = (): void => {
    const user = sessionStorage.getItem('user');
    if (user) {
      router.push('/payment/');
    } else {
      router.push('/login/');
    }
  }

  // Checkout Page
  if (showCheckout) {
    return (
      <>
        <MainHeader />
        <Navbar />
        <div style={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom right, #FFF3E0, #FFF8E1, #FFFDE7)',
          padding: '3rem 1.5rem'
        }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <h1 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#065F46'
              }}>
                Checkout
              </h1>
              <button
                onClick={() => setShowCheckout(false)}
                style={{
                  backgroundColor: '#6B7280',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4B5563'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6B7280'}
              >
                ← Back to Services
              </button>
            </div>

            {cart.length === 0 ? (
              <div style={{
                backgroundColor: 'white',
                borderRadius: '1rem',
                padding: '4rem 2rem',
                textAlign: 'center',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🛒</div>
                <h2 style={{ fontSize: '1.5rem', color: '#6B7280', marginBottom: '1rem' }}>
                  Your cart is empty
                </h2>
                <p style={{ color: '#9CA3AF', marginBottom: '2rem' }}>
                  Add some services to get started!
                </p>
                <button
                  onClick={() => setShowCheckout(false)}
                  style={{
                    backgroundColor: '#F97316',
                    color: 'white',
                    padding: '0.75rem 2rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '1rem',
                    transition: 'background-color 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EA580C'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F97316'}
                >
                  Browse Services
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 500px' }}>
                  <div style={{
                    backgroundColor: 'white',
                    borderRadius: '1rem',
                    padding: '2rem',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    <h2 style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: '#065F46',
                      marginBottom: '1.5rem',
                      paddingBottom: '1rem',
                      borderBottom: '2px solid #E5E7EB'
                    }}>
                      Cart Items ({getTotalItems()})
                    </h2>

                    {cart.map((item) => (
                      <div key={item.id} style={{
                        display: 'flex',
                        gap: '1rem',
                        padding: '1.5rem',
                        marginBottom: '1rem',
                        backgroundColor: '#F9FAFB',
                        borderRadius: '0.5rem',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                      }}>
                        <div style={{ flex: 1, minWidth: '150px' }}>
                          <h3 style={{
                            fontSize: '1.125rem',
                            fontWeight: '600',
                            color: '#111827',
                            marginBottom: '0.25rem'
                          }}>
                            {item.name}
                          </h3>
                          <p style={{ color: '#F97316', fontWeight: 'bold', fontSize: '1.125rem' }}>
                            ${item.price}
                          </p>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '0.25rem',
                              border: '1px solid #D1D5DB',
                              backgroundColor: 'white',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <Minus size={16} color="#92400E" />
                          </button>
                          <span style={{
                            width: '40px',
                            textAlign: 'center',
                            fontWeight: '600',
                            fontSize: '1rem'
                          }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '0.25rem',
                              border: '1px solid #D1D5DB',
                              backgroundColor: 'white',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <Plus size={16} color="#92400E" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          style={{
                            padding: '0.5rem',
                            color: '#DC2626',
                            border: 'none',
                            borderRadius: '0.375rem',
                            cursor: 'pointer',
                            backgroundColor: '#FEE2E2',
                            transition: 'background-color 0.3s'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FECACA'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FEE2E2'}
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ flex: '1 1 300px' }}>
                  <div style={{
                    backgroundColor: 'white',
                    borderRadius: '1rem',
                    padding: '2rem',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    position: 'sticky',
                    top: '2rem'
                  }}>
                    <h2 style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: '#065F46',
                      marginBottom: '1.5rem',
                      paddingBottom: '1rem',
                      borderBottom: '2px solid #E5E7EB'
                    }}>
                      Order Summary
                    </h2>

                    <div style={{ marginBottom: '1.5rem' }}>
                      {cart.map((item) => (
                        <div key={item.id} style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginBottom: '0.75rem',
                          color: '#6B7280'
                        }}>
                          <span>{item.name} × {item.quantity}</span>
                          <span style={{ fontWeight: '600' }}>
                            ${item.price * item.quantity}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div style={{
                      paddingTop: '1rem',
                      borderTop: '2px solid #E5E7EB',
                      marginBottom: '2rem'
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: '#065F46'
                      }}>
                        <span>Total</span>
                        <span style={{ color: '#F97316' }}>${getTotalPrice()}</span>
                      </div>
                    </div>

                    <button
                      onClick={placeorder}
                      style={{
                        width: '100%',
                        backgroundColor: '#10B981',
                        color: 'white',
                        padding: '1rem',
                        borderRadius: '0.5rem',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '1.125rem',
                        transition: 'background-color 0.3s',
                        marginBottom: '0.75rem'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#059669'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#10B981'}
                    >
                      Place Order
                    </button>

                    <button
                      onClick={clearCart}
                      style={{
                        width: '100%',
                        backgroundColor: '#FEE2E2',
                        color: '#DC2626',
                        padding: '0.75rem',
                        borderRadius: '0.5rem',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: '600',
                        transition: 'background-color 0.3s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FECACA'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FEE2E2'}
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div><Footer />
      </>
    );
  }

  // Services Page
  return (
    <>
      <MainHeader />
      <Navbar />
      <div style={{
        minHeight: '100vh',
        background: '#FFF8F0',
        padding: '3rem 1.5rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '1rem'
          }}>
            <button
              onClick={() => setShowCheckout(true)}
              style={{
                backgroundColor: '#F97316',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'background-color 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EA580C'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F97316'}
            >
              🛒 Cart
              {cart.length > 0 && (
                <span style={{
                  backgroundColor: '#DC2626',
                  color: 'white',
                  borderRadius: '9999px',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 'bold'
                }}>
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <aside style={{
              width: '250px',
              flexShrink: 0,
              minWidth: '250px'
            }}>
              <div style={{
                background: 'white',
                borderRadius: '1rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                padding: '1.5rem',
                position: 'sticky',
                top: '1.5rem'
              }}>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#065F46',
                  marginBottom: '1.5rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '2px solid #DC2626'
                }}>
                  Categories
                </h2>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <button
                    onClick={() => setSelectedCategory('all')}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      fontWeight: '500',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      backgroundColor: selectedCategory === 'all' ? '#F97316' : '#F9FAFB',
                      color: selectedCategory === 'all' ? 'white' : '#374151',
                      boxShadow: selectedCategory === 'all' ? '0 4px 6px rgba(0,0,0,0.1)' : 'none'
                    }}
                  >
                    All Services
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.5rem',
                        fontWeight: '500',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        backgroundColor: selectedCategory === category.id ? '#F97316' : '#F9FAFB',
                        color: selectedCategory === category.id ? 'white' : '#374151',
                        boxShadow: selectedCategory === category.id ? '0 4px 6px rgba(0,0,0,0.1)' : 'none'
                      }}
                    >{category.name}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            <section style={{ flex: 1, minWidth: '300px' }}>
              <h1 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#065F46',
                marginBottom: '2rem'
              }}>
                <span style={{
                  textDecoration: 'underline',
                  textDecorationColor: '#DC2626',
                  textDecorationThickness: '4px'
                }}>
                  {selectedCategory === 'all'
                    ? 'All Services'
                    : categories.find(c => c.id === selectedCategory)?.name || 'All Services'}
                </span>
              </h1>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '1.5rem'
              }}>
                {filteredServices.map((service) => (
                  <div
                    key={service.id}
                    style={{
                      backgroundColor: service.bgColor,
                      border: `2px solid ${service.borderColor}`,
                      borderRadius: '1.5rem',
                      padding: '2rem',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                      transition: 'box-shadow 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)'}
                  >

                    <h3 style={{
                      color: '#78350F',
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      textAlign: 'center',
                      marginBottom: '1.5rem',
                      minHeight: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {service.name}
                    </h3>

                    <div style={{
                      color: '#EA580C',
                      fontSize: '2.5rem',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginBottom: '2rem'
                    }}>
                      ${service.price}
                    </div>

                    <button
                      onClick={() => addToCart(service)}
                      style={{
                        width: '100%',
                        backgroundColor: cart.find(item => item.id === service.id) ? '#10B981' : '#F97316',
                        color: 'white',
                        fontWeight: '600',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.5rem',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s'
                      }}
                      onMouseEnter={(e) => {
                        const isInCart = cart.find(item => item.id === service.id);
                        e.currentTarget.style.backgroundColor = isInCart ? '#059669' : '#EA580C';
                      }}
                      onMouseLeave={(e) => {
                        const isInCart = cart.find(item => item.id === service.id);
                        e.currentTarget.style.backgroundColor = isInCart ? '#10B981' : '#F97316';
                      }}
                    >
                      {cart.find(item => item.id === service.id)
                        ? `Added to Cart (${cart.find(item => item.id === service.id)?.quantity})`
                        : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>

              {filteredServices.length === 0 && (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <p style={{ fontSize: '1.25rem', color: '#6B7280' }}>
                    No services found in this category.
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>
      </div><Footer />
    </>
  );
}
