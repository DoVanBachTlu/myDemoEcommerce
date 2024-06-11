import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  IconOpenMenu,
  IconSearch,
  IconCart,
  IconBack,
} from '../../../../assets/icons';
import {distanceHorizontal, textSizeStyle} from '../../../utils/Defined';
import {
  CommonActions,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';

interface Props {
  headerTitle?: string;
  containerStyle?: any;
  pressGoBack?: boolean;
}
export default function Header(props: Props): React.ReactNode {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, props.containerStyle]}>
      {props.pressGoBack ? (
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.goBack())}>
          <IconBack />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <IconOpenMenu />
        </TouchableOpacity>
      )}
      <Text style={[textSizeStyle.headerScreen]}>{props.headerTitle}</Text>

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
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: distanceHorizontal,
    paddingVertical: distanceHorizontal / 2,
  },
  wrapRightHeader: {
    flexDirection: 'row',
    marginRight: 10,
  },
});