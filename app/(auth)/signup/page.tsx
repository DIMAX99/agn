'use client';

import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { useState } from 'react';
import { FaGoogle, FaApple, FaFacebook } from 'react-icons/fa';
import SocialLoginButton from '@/app/components/buttons/SocialLoginButton';
import GradientButton from '@/app/components/buttons/GradientButton';
import TextInput from '@/app/components/inputs/TextInput';
import PasswordInput from '@/app/components/inputs/PasswordInput';
import RadioGroup from '@/app/components/inputs/RadioGroup';
import { validateName, validateEmail, validatePassword, validateGender, validateDateOfBirth } from '@/app/utils/validation';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    dateOfBirth: '',
    gender: ''
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
    dateOfBirth: false,
    gender: false
  });

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
    { value: 'prefer-not-to-say', label: 'Prefer not to say' }
  ];


  // Handle when the user touches an input field and moves away (blur event)
  const handleBlur = (field: keyof typeof touched) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    
    switch (field) {
      case 'name':
        setErrors(prev => ({ ...prev, name: validateName(name) }));
        break;
      case 'email':
        setErrors(prev => ({ ...prev, email: validateEmail(email) }));
        break;
      case 'password':
        setErrors(prev => ({ ...prev, password: validatePassword(password) }));
        break;
      case 'dateOfBirth':
        setErrors(prev => ({ ...prev, dateOfBirth: validateDateOfBirth(dateOfBirth) }));
        break;
      case 'gender':
        setErrors(prev => ({ ...prev, gender: validateGender(gender) }));
        break;
    }
  };

  const handleNameChange = (value: string) => {
    setName(value);
    if (touched.name) {
      setErrors(prev => ({ ...prev, name: validateName(value) }));
    }
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

  const handleDateChange = (value: string) => {
    setDateOfBirth(value);
    if (touched.dateOfBirth) {
      setErrors(prev => ({ ...prev, dateOfBirth: validateDateOfBirth(value) }));
    }
  };

  const handleGenderChange = (value: string) => {
    setGender(value);
    if (touched.gender) {
      setErrors(prev => ({ ...prev, gender: validateGender(value) }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // add error after validating all the fields
    const newErrors = {
      name: validateName(name),
      email: validateEmail(email),
      password: validatePassword(password),
      dateOfBirth: validateDateOfBirth(dateOfBirth),
      gender: validateGender(gender)
    };
    //set the error state with the new errors and mark all fields as touched to show validation messages
    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      password: true,
      dateOfBirth: true,
      gender: true
    });
    
    // If no errors, proceed with signup
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    if (!hasErrors) {
      console.log('Successful Signup:', { name, email, password, dateOfBirth, gender });
      // Handle signup or mutation logic here
    }
  };

  return (
    <main className={`${montserrat.className} h-[calc(100vh-98px)] bg-[#121418] text-white flex items-center justify-center px-6 overflow-hidden`}>
      <div className="w-full max-w-7xl">
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-center">
          
          {/* Left Section - Signup Form */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-3">Create Account</h1>
              <p className="text-gray-400">Join us and start your learning journey</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <TextInput
                id="name"
                label="Full Name"
                type="text"
                value={name}
                onChange={handleNameChange}
                onBlur={() => handleBlur('name')}
                error={errors.name}
                touched={touched.name}
                placeholder="John Doe"
              />

              {/* Email Input */}
              <TextInput
                id="email"
                label="Email Address"
                type="email"
                value={email}
                onChange={handleEmailChange}
                onBlur={() => handleBlur('email')}
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
                onBlur={() => handleBlur('password')}
                error={errors.password}
                touched={touched.password}
                placeholder="Create a password"
              />

              {/* Date of Birth Input */}
              <TextInput
                id="dateOfBirth"
                label="Date of Birth"
                type="date"
                value={dateOfBirth}
                onChange={handleDateChange}
                onBlur={() => handleBlur('dateOfBirth')}
                error={errors.dateOfBirth}
                touched={touched.dateOfBirth}
                accentColor="var(--primary-color)"
              />

              {/* Gender Input */}
              <RadioGroup
                label="Gender"
                name="gender"
                options={genderOptions}
                value={gender}
                onChange={handleGenderChange}
                onBlur={() => handleBlur('gender')}
                error={errors.gender}
                touched={touched.gender}
              />

              {/* Submit Button */}
              <GradientButton type="submit" className="text-lg">
                Sign Up
              </GradientButton>

              {/* Login Link */}
              <p className="text-center text-gray-400 text-sm">
                Already have an account?{' '}
                <Link href="/login" className="hover:underline text-primary">
                  Log in
                </Link>
              </p>
            </form>
          </div>

          {/* Middle Section - White Divider Line */}
          <div className="hidden md:block w-px h-96 bg-white"></div>
          
          {/* Right Section - Social Login */}
          <div className="flex flex-col justify-center">
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">Or sign up with</h2>
              
              <div className="space-y-4">
                {/* Google Sign In */}
                <SocialLoginButton icon={<FaGoogle className="w-5 h-5" />}>
                  Sign up with Google
                </SocialLoginButton>

                {/* Apple Sign In */}
                <SocialLoginButton icon={<FaApple className="w-5 h-5" />}>
                  Sign up with Apple
                </SocialLoginButton>

                {/* Facebook Sign In */}
                <SocialLoginButton icon={<FaFacebook className="w-5 h-5" />}>
                  Sign up with Facebook
                </SocialLoginButton>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-800">
                <p className="text-center text-sm text-gray-400">
                  By signing up, you agree to our{' '}
                  <Link href="/terms" className="hover:underline text-primary">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
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