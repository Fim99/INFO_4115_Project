import 'react-native-gesture-handler'; // Must be first
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // Ensures proper handling of safe areas
import { enableScreens } from 'react-native-screens';

// Screens
import Main from './components/Main';
// Version 1 Screens
import Home_V1 from './components/V1/Home_V1';
import QuickActions_V1 from './components/V1/QuickActions_V1';
import MoreControls_V1 from './components/V1/MoreControls_V1';
import TempFan_V1 from './components/V1/TempFan_V1';
import Scheduling_V1 from './components/V1/Scheduling_V1';
import Energy_V1 from './components/V1/Energy_V1';
// Version 2 Screens
import Home_V2 from './components/V2/Home_V2';
import QuickActions_V2 from './components/V2/QuickActions_V2';
import MoreControls_V2 from './components/V2/MoreControls_V2';
import TempFan_V2 from './components/V2/TempFan_V2';
import Scheduling_V2 from './components/V2/Scheduling_V2';
import Energy_V2 from './components/V2/Energy_V2';

// Enable native screens for performance
enableScreens();
const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Energy_V1">
          <Stack.Screen name="Main" component={Main} />
          {/* Version 1 Screens */}
          <Stack.Screen name="Home_V1" component={Home_V1} />
          <Stack.Screen name="QuickActions_V1" component={QuickActions_V1} />
          <Stack.Screen name="MoreControls_V1" component={MoreControls_V1} />
          <Stack.Screen name="TempFan_V1" component={TempFan_V1} />
          <Stack.Screen name="Scheduling_V1" component={Scheduling_V1} />
          <Stack.Screen name="Energy_V1" component={Energy_V1} />
          {/* Version 2 Screens */}
          <Stack.Screen name="Home_V2" component={Home_V2} />
          <Stack.Screen name="QuickActions_V2" component={QuickActions_V2} />
          <Stack.Screen name="MoreControls_V2" component={MoreControls_V2} />
          <Stack.Screen name="TempFan_V2" component={TempFan_V2} />
          <Stack.Screen name="Scheduling_V2" component={Scheduling_V2} />
          <Stack.Screen name="Energy_V2" component={Energy_V2} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
