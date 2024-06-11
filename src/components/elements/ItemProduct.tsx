import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  distanceHorizontal,
  formatMoney,
  formatNumber,
  textSizeStyle,
} from '../../utils/Defined';
import {
  CommonActions,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import {windowWidth} from '../../utils/Defined';

interface Props {
  productInfo?: object;
  containerStyle?: any;
}
const distanceBetweenItems = 20;
const widthItem =
  (windowWidth - distanceHorizontal * 2 - distanceBetweenItems) / 2;
const ratio = 60 / 90;
export default function ItemProduct(props: Props): React.ReactNode {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={[styles.container, props.containerStyle]}>
      <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2017/08/20/10/39/leather-shoes-2661249_640.jpg',
        }}
        style={styles.imgProduct}
      />
      <Text numberOfLines={2} style={styles.productName}>
        Têdn ádjh ákdjhasdkahs áhdiasuh dáiuh dái hádhasdjah ạdh ákdjahdkajsd
        haksj dhakdjajaj dá ja dạ dakjdash dá
      </Text>
      <View style={{marginVertical: 5}}>
        <Text numberOfLines={1} style={styles.numberSold}>
          {`Còn lại ${formatNumber(150000)}`}
        </Text>
      </View>
      <View style={styles.wrapViewPrice}>
        <Text style={styles.priceNotDiscount}>{formatMoney(15000)}</Text>
        <Text style={styles.realPrice}>{formatMoney(13000)}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: widthItem,
  },
  wrapRightHeader: {
    flexDirection: 'row',
    marginRight: 10,
  },
  imgProduct: {
    width: '100%',
    height: widthItem * (1 / ratio),
    marginBottom: 5,
  },
  productName: {
    ...textSizeStyle.large,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  numberSold: {
    ...textSizeStyle.normal,
    textAlign: 'right',
    color: 'grey',
  },
  wrapViewPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  realPrice: {
    color: 'red',
  },
  priceNotDiscount: {
    textDecorationLine: 'line-through',
  },
});
