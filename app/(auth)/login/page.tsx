'use client';

import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { useState } from 'react';
import { FaGoogle, FaApple, FaFacebook } from 'react-icons/fa';
import SocialLoginButton from '@/app/components/SocialLoginButton';
import GradientButton from '@/app/components/GradientButton';
import TextInput from '@/app/components/TextInput';
import PasswordInput from '@/app/components/PasswordInput';
import { validateEmail, validatePassword } from '@/app/utils/validation';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function LoginPage() {
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [touched, setTouched] = useState({ email: false, password: false });

  // Handle when the user touches the email input field and moves away (blur event)
  const handleEmailBlur = () => {
    setTouched(prev => ({ ...prev, email: true }));
    setErrors(prev => ({ ...prev, email: validateEmail(email) }));
  };

  //Handle when the user touches the password input field and moves away (blur event)
  const handlePasswordBlur = () => {
    setTouched(prev => ({ ...prev, password: true }));
    setErrors(prev => ({ ...prev, password: validatePassword(password) }));
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (touched.email) {
      setErrors(prev => ({ ...prev, email: validateEmail(value) }));
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (touched.password) {
      setErrors(prev => ({ ...prev, password: validatePassword(value) }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Set error after validation the email and password
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    
    setErrors({ email: emailError, password: passwordError });
    setTouched({ email: true, password: true });
    
    // proceed with login if no error found
    if (!emailError && !passwordError) {
      console.log('Login:', { email, password });
      // Login logic goes here (eg . mutation or apicall )
    }
  };

  return (
    <main className={`${montserrat.className} h-[calc(100vh-98px)] bg-[#121418] text-white flex items-center justify-center px-6 overflow-hidden`}>
      <div className="w-full max-w-7xl">
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-center">
          
          {/* Left Section - Email/Password Login */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-3">Welcome Back</h1>
              <p className="text-gray-400">Sign in to continue your learning journey</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <TextInput
                id="email"
                label="Email Address"
                type="email"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                error={errors.email}
                touched={touched.email}
                placeholder="you@example.com"
              />

              {/* Password Input */}
              <PasswordInput
                id="password"
                label="Password"
                value={password}
                onChange={handlePasswordChange}
                onBlur={handlePasswordBlur}
                error={errors.password}
                touched={touched.password}
                placeholder="Enter your password"
              />

              {/* Forgot Password Link */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 accent-primary" />
                  <span className="text-sm text-gray-400">Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-sm hover:underline text-primary">
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <GradientButton type="submit" className="text-lg">
                Log In
              </GradientButton>

              {/* Sign Up Link */}
              <p className="text-center text-gray-400 text-sm">
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="hover:underline text-primary">
                  Sign up
                </Link>
              </p>
            </form>
          </div>

          {/* Middle Section - White Divider Line */}
          <div className="hidden md:block w-px h-96 bg-white"></div>
          
          {/* Right Section - Social Login */}
          <div className="flex flex-col justify-center">
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">Or continue with</h2>
              
              <div className="space-y-4">
                {/* Google Sign In */}
                <SocialLoginButton icon={<FaGoogle className="w-5 h-5" />}>
                  Continue with Google
                </SocialLoginButton>

                {/* Apple Sign In */}
                <SocialLoginButton icon={<FaApple className="w-5 h-5" />}>
                  Continue with Apple
                </SocialLoginButton>

                {/* Facebook Sign In */}
                <SocialLoginButton icon={<FaFacebook className="w-5 h-5" />}>
                  Continue with Facebook
                </SocialLoginButton>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-800">
                <p className="text-center text-sm text-gray-400">
                  By continuing, you agree to our{' '}
                  <Link href="/terms" className="hover:underline text-primary">
                    Terms of Service
                  </Link>
                  and
                  <Link href="/privacy" className="hover:underline text-primary">
                    Privacy Policy
                  </Link>
                </p>
              </div>
          </div>

        </div>
      </div>
      </div>
    </main>
  );
}