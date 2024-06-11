import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScreenName} from '../router/ScreenName';
export default function Dashboard(): React.ReactNode {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate(ScreenName.home)}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(ScreenName.detail)}>
        <Text>Detail</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
