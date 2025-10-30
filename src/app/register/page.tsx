"use client";
import { useEffect, useState } from "react";
import MainHeader from '@/components/TopInfo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Tiles from '@/components/Tiles';
import FloatingDonateButton from '@/components/FloatingDonateButton';
import { makeSignedRequest } from '../app/../layout-client';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Validation Schema with Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Full Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: React.FC = () => {
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [strengthLabel, setStrengthLabel] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      if (passwordStrength < 3) {
        formik.setFieldError('password', 'Password is too weak. Use a stronger password.');
        return;
      } else {
        handleRegister(values);
      }
      // console.log('Registration successful:', values);
      // alert('Registration successful!');
      // // Reset form
      // formik.resetForm();
      // setPasswordStrength(0);
      // setStrengthLabel('');
    },
  });

  const handleRegister = async (values: any) => {
    try {
      if (typeof window.grecaptcha === 'undefined') {
        throw new Error('reCAPTCHA has not loaded');
      }

      const token = await new Promise<string>((resolve, reject) => {
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute('6Lfgd58qAAAAAPV03W3LgVMhxu57mDL006Jr3Jhs', { action: 'submit' })
            .then(resolve, reject);
        });
      });

      const apiEndpoint = "https://nfgfx2bpj6.execute-api.us-east-1.amazonaws.com/ProdUser/user";

      const body = {
        action: "AddUser",
        user: {
          UserId: values.name,
          Email: values.email,
          Name: values.name,
          Password: values.password,
        },
        token: token,
      };
      //log("Request body:", body);
      const data = await makeSignedRequest(apiEndpoint, "POST", body);
      let msg = JSON.parse(data?.body);
      setToast({ message: msg?.message, type: 'success' });
    } catch (error) {
      console.error("Submission error:", error);
      // log("Submission error:", error);
      // setMessage("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate password strength in real-time
  useEffect(() => {
    const password = formik.values.password;
    if (!password) {
      setPasswordStrength(0);
      setStrengthLabel('');
      return;
    }

    let strength = 0;
    const checks = [
      password.length >= 8,
      /[A-Z]/.test(password),
      /[a-z]/.test(password),
      /[0-9]/.test(password),
      /[^A-Za-z0-9]/.test(password),
    ];

    strength = checks.filter(Boolean).length;
    setPasswordStrength(strength);

    const labels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
    setStrengthLabel(labels[strength]);
  }, [formik.values.password]);

  // Get color for strength bar
  const getStrengthColor = () => {
    if (passwordStrength <= 1) return '#ff4d4f';
    if (passwordStrength === 2) return '#ffa940';
    if (passwordStrength === 3) return '#52c41a';
    if (passwordStrength >= 4) return '#389e0d';
    return '#d9d9d9';
  };

  return (
    <>
      <MainHeader />
      <Navbar />
      <div className="gradient-background">
        <div className="bg-gradient-to-b from-golden-gradient-start via-golden-gradient-middle to-golden-gradient-end text-darkRed min-h-screen">
          <div className="container mx-auto max-w-2xl">
            <div className="container mx-auto py-12 px-6">
              <section className="mb-16">
                <div id="newsletter" className="bg-white p-6 rounded-lg shadow-lg">
                  <div style={{ fontFamily: 'Arial, sans-serif' }}>
                    <div style={{ maxWidth: '500px', margin: '0 auto', width: '100%' }}>
                      <h1
                        style={{
                          fontSize: '2.0rem',
                          fontWeight: 'bold',
                          color: '#006B5C',
                          marginBottom: '2rem',
                          textAlign: 'left',
                        }}
                      >
                        Create an Account
                      </h1>

                      <form onSubmit={formik.handleSubmit}>
                        {/* Name Input */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            border: `2px solid ${formik.touched.name && formik.errors.name ? '#ff4d4f' : '#ddd'
                              }`,
                            borderRadius: '8px',
                            marginBottom: '0.5rem',
                            overflow: 'hidden',
                            transition: 'border-color 0.2s',
                          }}
                        >
                          <div
                            style={{
                              padding: '1rem 1.25rem',
                              backgroundColor: '#e8e8e8',
                              borderRight: '2px solid #ddd',
                            }}
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                              <circle cx="12" cy="7" r="4" />
                            </svg>
                          </div>
                          <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            style={{
                              flex: 1,
                              border: 'none',
                              outline: 'none',
                              padding: '1rem 1.25rem',
                              fontSize: '1rem',
                              color: '#666',
                            }}
                          />
                        </div>
                        {formik.touched.name && formik.errors.name && (
                          <p style={{ color: '#ff4d4f', fontSize: '0.875rem', margin: '0.25rem 0 1rem', textAlign: 'left' }}>
                            {formik.errors.name}
                          </p>
                        )}

                        {/* Email Input */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            border: `2px solid ${formik.touched.email && formik.errors.email ? '#ff4d4f' : '#ddd'
                              }`,
                            borderRadius: '8px',
                            marginBottom: '0.5rem',
                            overflow: 'hidden',
                          }}
                        >
                          <div
                            style={{
                              padding: '1rem 1.25rem',
                              backgroundColor: '#e8e8e8',
                              borderRight: '2px solid #ddd',
                            }}
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                              <rect x="3" y="5" width="18" height="14" rx="2" />
                              <path d="M3 7l9 6 9-6" />
                            </svg>
                          </div>
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            style={{
                              flex: 1,
                              border: 'none',
                              outline: 'none',
                              padding: '1rem 1.25rem',
                              fontSize: '1rem',
                              color: '#666',
                            }}
                          />
                        </div>
                        {formik.touched.email && formik.errors.email && (
                          <p style={{ color: '#ff4d4f', fontSize: '0.875rem', margin: '0.25rem 0 1rem', textAlign: 'left' }}>
                            {formik.errors.email}
                          </p>
                        )}

                        {/* Password Input */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            border: `2px solid ${(formik.touched.password && formik.errors.password) || (passwordStrength > 0 && passwordStrength < 3)
                                ? '#ff4d4f'
                                : '#ddd'
                              }`,
                            borderRadius: '8px',
                            marginBottom: '0.5rem',
                            overflow: 'hidden',
                          }}
                        >
                          <div
                            style={{
                              padding: '1rem 1.25rem',
                              backgroundColor: '#e8e8e8',
                              borderRight: '2px solid #ddd',
                            }}
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                              <rect x="3" y="11" width="18" height="13" rx="2" />
                              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                          </div>
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            style={{
                              flex: 1,
                              border: 'none',
                              outline: 'none',
                              padding: '1rem 1.25rem',
                              fontSize: '1rem',
                              color: '#666',
                            }}
                          />
                        </div>

                        {passwordStrength > 0 &&
                          <div style={{ marginBottom: '1rem' }}>
                            <div
                              style={{
                                height: '8px',
                                width: '100%',
                                backgroundColor: '#f0f0f0',
                                borderRadius: '4px',
                                overflow: 'hidden',
                                marginBottom: '0.5rem',
                              }}
                            >
                              <div
                                style={{
                                  height: '100%',
                                  width: `${(passwordStrength / 5) * 100}%`,
                                  backgroundColor: getStrengthColor(),
                                  transition: 'all 0.3s ease',
                                }}
                              />
                            </div>
                            <p
                              style={{
                                fontSize: '0.875rem',
                                color: getStrengthColor(),
                                fontWeight: 'bold',
                                textAlign: 'left',
                              }}
                            >
                              {formik.values.password ? `Password Strength: ${strengthLabel}` : ' '}
                            </p>
                          </div>}

                        {formik.touched.password && formik.errors.password && (
                          <p style={{ color: '#ff4d4f', fontSize: '0.875rem', margin: '0.25rem 0 1rem', textAlign: 'left' }}>
                            {formik.errors.password}
                          </p>
                        )}

                        {/* Confirm Password Input */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            border: `2px solid ${formik.touched.confirmPassword && formik.errors.confirmPassword ? '#ff4d4f' : '#ddd'
                              }`,
                            borderRadius: '8px',
                            marginBottom: '1.5rem',
                            overflow: 'hidden',
                          }}
                        >
                          <div
                            style={{
                              padding: '1rem 1.25rem',
                              backgroundColor: '#e8e8e8',
                              borderRight: '2px solid #ddd',
                            }}
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                              <path d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm10-10V7a4 4 0 0 0-8 0v4h8z" />
                            </svg>
                          </div>
                          <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            style={{
                              flex: 1,
                              border: 'none',
                              outline: 'none',
                              padding: '1rem 1.25rem',
                              fontSize: '1rem',
                              color: '#666',
                            }}
                          />
                        </div>
                        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                          <p style={{ color: '#ff4d4f', fontSize: '0.875rem', margin: '0.25rem 0 1rem', textAlign: 'left' }}>
                            {formik.errors.confirmPassword}
                          </p>
                        )}

                        {/* Register Button */}
                        <button
                          type="submit"
                          disabled={formik.isSubmitting || passwordStrength < 3}
                          style={{
                            width: '100%',
                            padding: '1rem',
                            fontSize: '1.25rem',
                            fontWeight: 'bold',
                            color: 'white',
                            background: 'linear-gradient(to right, #008C7A, #006B5C)',
                            border: 'none',
                            borderRadius: '50px',
                            cursor: formik.isSubmitting || passwordStrength < 3 ? 'not-allowed' : 'pointer',
                            opacity: formik.isSubmitting || passwordStrength < 3 ? 0.7 : 1,
                            transition: 'all 0.2s',
                          }}
                          onMouseEnter={(e) =>
                            !formik.isSubmitting &&
                            passwordStrength >= 3 &&
                            (e.currentTarget.style.transform = 'scale(1.02)')
                          }
                          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                        >
                          {formik.isSubmitting ? 'Registering...' : 'Register'}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterForm;