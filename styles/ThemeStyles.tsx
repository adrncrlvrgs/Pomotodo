// src/theme/theme.js

import { createTheme } from '@rneui/themed';

const lightColors = {
  primary: '#eef5db',
  secondary: '#e8eaed',
  background: '#e8eaed',
  buttonBackground: '#0d1314', // Dark button for light mode
  buttonText: '#ffffff',       // Light text for button in light mode
};

const darkColors = {
  primary: '#0d1314',
  secondary: '#314447',
  background: '#0d1314',
  buttonBackground: '#eef5db', // Light button for dark mode
  buttonText: '#333333',       // Dark text for button in dark mode
};

export const theme = createTheme({
  lightColors,
  darkColors,
  mode: 'light', 
});
