import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenName} from '../router/ScreenName';
import {Routers} from '../router';
import {
  ActiveHome,
  UnActiveHome,
  ActiveAccount,
  UnActiveAccount,
} from '../../../assets/icons';
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={ScreenName.home}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === ScreenName.home) {
            return focused ? <ActiveHome /> : <UnActiveHome />;
          } else if (route.name === ScreenName.account) {
            return focused ? <ActiveAccount /> : <UnActiveAccount />;
          }
        },
        headerShown: false,
      })}>
      <Tab.Screen
        name={ScreenName.home}
        component={Routers.home.component}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name={ScreenName.account}
        component={Routers.account.component}
        options={{tabBarLabel: 'Account'}}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
