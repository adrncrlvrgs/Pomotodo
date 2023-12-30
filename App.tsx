import React,{useState} from 'react';
import { ThemeProvider } from '@rneui/themed';
import { Main } from './src/index';
import { theme } from './styles/ThemeStyles';
export default function App() {
  const [themeMode, setThemeMode] = useState('light');


  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  const currentThemeColors = themeMode === 'light' ? theme.lightColors : theme.darkColors;
  const currentTheme = { ...theme, colors: currentThemeColors };
  return (

    <ThemeProvider theme={currentTheme}>
      <Main toggleTheme={toggleTheme}/>
    </ThemeProvider>
  );
}

