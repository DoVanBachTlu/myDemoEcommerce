import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {distanceHorizontal} from '../../utils/Defined';
import {textSizeStyle} from '../../utils/Defined';
import Header from '../../components/common/Header/Header';
import ItemProduct from '../../components/elements/ItemProduct';

export default function Home(): React.ReactNode {
  return (
    <SafeAreaView>
      <Header headerTitle={'Home'} />
      <ItemProduct />
    </SafeAreaView>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapViewTxtInput: {
    marginHorizontal: distanceHorizontal * 2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtCreateAccount: {
    ...textSizeStyle.title,
    textAlign: 'center',
  },
});
