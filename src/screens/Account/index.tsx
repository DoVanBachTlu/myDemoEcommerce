import React, {useState} from 'react';
import {
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/common/Header/Header';
import {StyleSheet} from 'react-native';
import TxtInput from '../../components/common/TextInput';
import {distanceHorizontal} from '../../utils/Defined';
import {textSizeStyle} from '../../utils/Defined';
export default function Account(): React.ReactNode {
  const [accountName, setAccountName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <Header headerTitle={'Account'} />
        <View style={styles.wrapViewTxtInput}>
          <TxtInput
            placeHolder={'Tài khoản'}
            value={accountName}
            setValue={(text: string) => setAccountName(text)}
          />
          <TxtInput
            rightIcon
            placeHolder={'Mật khẩu'}
            isPassword
            value={password}
            setValue={(text: string) => setPassword(text)}
          />
          <TouchableOpacity>
            <Text style={styles.txtCreateAccount}>Bạn chưa có tài khoản?</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
