import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../Views/index'

const Stack = createNativeStackNavigator();

const Nav = ({ toggleTheme, themeMode}:{toggleTheme :any, themeMode: any}) => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTintColor: 'black', headerTitleStyle: { fontWeight: 'bold',},}}>
        <Stack.Screen 
          name="Home" 
          component={() => <Home toggleTheme={toggleTheme} lampColor={themeMode} />}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
      </NavigationContainer>
  
  );
};

export default Nav