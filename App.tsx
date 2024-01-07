import React, { useState } from 'react';
import { ThemeProvider } from '@rneui/themed';
import { Main } from './src/index';
import { theme } from './styles/ThemeStyles';
import { useTheme, Text } from "@rneui/themed";


export default function App() {
  const [themeMode, setThemeMode] = useState('light');
  //console.log(themeMode)
  const toggleTheme = () => {
    setThemeMode(themeMode == 'light' ? 'dark' : 'light');
  };

  const currentThemeColors = themeMode === 'light' ? theme.lightColors : theme.darkColors;
  const currentTheme = { ...theme, colors: currentThemeColors};

  return (
    <ThemeProvider theme={currentTheme}>
      <Main toggleTheme={toggleTheme} lampColor={themeMode}/>
    </ThemeProvider>
  );
}
