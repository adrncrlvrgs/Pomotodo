import { createTheme } from '@rneui/themed';

const lightColors = {
  primary: '#f1f1f1',
  secondary: '#F7FAFC',
  background: '#EFF2F4',  
  mode: 'light'    
};

const darkColors = {
  primary: '#0d1314',
  secondary: '#b58890',
  background: '#ffb6c5',      
  mode: 'dark'
};

export const theme = createTheme({
  lightColors,
  darkColors,
});
