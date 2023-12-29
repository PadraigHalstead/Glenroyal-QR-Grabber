import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from './screens/Home';
import { Confirmation } from './screens/Confirmation';
import { Scan } from './screens/Scan';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Glenroyal QR Grabber' }}
        />
        <Stack.Screen
          name="Scan"
          component={Scan}
          options={{ title: 'Scan a QR Code' }}
        />
        <Stack.Screen
          name="Confirmation"
          component={Confirmation}
          options={{ title: 'Confirmation' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
