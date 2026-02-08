export const validateName = (name: string): string => {
    if (!name.trim()) return 'Full name is required';
    if (name.trim().length < 2) return 'Name must be at least 2 characters'; //to check for length of the name
    if (!/^[a-zA-Z\s]+$/.test(name)) return 'Name should only contain letters'; //regex to allow only letters and spaces
    return '';
  };

export const validateEmail = (email: string): string => {
    if (!email) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  //regex to validate email format
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return '';
  };

  export const validatePassword = (password: string): string => {
    if (!password) return 'Password is required';
    if (password.length < 8) return 'Password must be at least 8 characters'; //to check for minimum length
    if (!/[A-Z]/.test(password)) return 'Password must contain at least one uppercase letter'; //regex to check for uppercase letter
    if (!/[a-z]/.test(password)) return 'Password must contain at least one lowercase letter';  //regex to check for lowercase letter
    if (!/[0-9]/.test(password)) return 'Password must contain at least one number'; //regex to check for number
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return 'Password must contain at least one special character'; //regex to check for special character
    return '';
  };

  export const validateDateOfBirth = (date: string): string => {
    if (!date) return 'Date of birth is required';
    const birthDate = new Date(date);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    // Check if the birthday has occurred this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      if (age - 1 < 8) return 'You must be at least 8 years old';
    } else {
      if (age < 8) return 'You must be at least 8 years old';
    }
    return '';
  };

  export const validateGender = (gender: string): string => {
    if (!gender) return 'Please select a gender'; //to check if a gender is selected
    return '';
  };