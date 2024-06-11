import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ScreenName} from '../router/ScreenName';
import {Routers} from '../router';
import Dashboard from './DrawerContent';
import {IconCart, IconSearch} from '../../../assets/icons';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import BottomTabNavigator from '../BottomTab';
const Drawer = createDrawerNavigator();

const CustomRightHeader = () => {
  return (
    <View style={styles.wrapRightHeader}>
      <TouchableOpacity
        onPress={() => console.log('aaaaa')}
        style={{marginRight: 10}}>
        <IconSearch />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('aaaaa')}>
        <IconCart />
      </TouchableOpacity>
    </View>
  );
};
export default function MainDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName={ScreenName.home}
      drawerContent={props => <Dashboard {...props} />}>
      <Drawer.Screen
        name={ScreenName.home}
        component={BottomTabNavigator}
        // options={{
        //   headerTitle: ScreenName.home,
        //   headerTitleAlign: 'center',
        //   headerRight: () => <CustomRightHeader />,
        // }}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name={ScreenName.detail}
        component={Routers.detail.component}
      />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  wrapRightHeader: {
    flexDirection: 'row',
    marginRight: 10,
  },
});
