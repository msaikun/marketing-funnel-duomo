import { useState } from 'react';
const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidEmail = (email: string) => emailRegExp.test(email);

export const useValidateEmail = () => {
  const [error, setError] = useState('');

  const handleError = (value: string) => {
    if (!value) {
      setError('Field is required');
    } else if (!isValidEmail(value)) {
      setError('Please enter a valid emai');
    } else {
      setError('');
    }
  };

  return { error, handleError };
};

