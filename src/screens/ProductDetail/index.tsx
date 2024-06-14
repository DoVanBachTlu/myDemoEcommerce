import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/common/Header/Header";
import {
  distanceHorizontal,
  textSizeStyle,
  windowWidth,
} from "../../utils/Defined";

export default function ProductDetail(): React.ReactNode {
  const imgList = [
    "https://cdn.pixabay.com/photo/2017/08/20/10/39/leather-shoes-2661249_640.jpg",
    "https://img.freepik.com/free-photo/blue-t-shirt_125540-727.jpg",
    "https://img.freepik.com/free-photo/bff-printed-red-hoodie_53876-105408.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718064000&semt=sph",
    "https://img.freepik.com/free-photo/fast-fashion-concept-with-clothing-hangers_23-2150871176.jpg",
    "https://img.freepik.com/free-photo/bff-printed-red-hoodie_53876-105408.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718064000&semt=sph",
    "https://img.freepik.com/free-photo/fast-fashion-concept-with-clothing-hangers_23-2150871176.jpg",
  ];
  const [uriImgPreview, setUriImgPreview] = useState(imgList[1]);
  const [quantity, setQuantity] = useState(1);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header pressGoBack headerTitle={"Chi tiết"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{
            uri: uriImgPreview,
          }}
          style={styles.imgPreview}
        />
        <Text
          style={[textSizeStyle.headerScreen, { marginLeft: 8 }]}
          numberOfLines={2}
        >
          Têdn ádjh ákdjhasdkahs áhdiasuh ad â hádhasdjah ạdh ákdjahdkajsd haksj
          dhakdjajaj dá ja dạ dakjdash dá
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={imgList}
          style={{
            marginVertical: 8,
            flex: 1,
          }}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setUriImgPreview(item)}
              >
                <Image source={{ uri: item }} style={styles.imgSmall} />
              </TouchableOpacity>
            );
          }}
        />
        <View style={styles.wrapViewQuantity}>
          <TouchableOpacity
            onPress={() => {
              if (quantity === 1) return;
              setQuantity(quantity - 1);
            }}
          >
            <Text style={styles.txtQuantity}>-</Text>
          </TouchableOpacity>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={styles.txtQuantity}>{quantity}</Text>
          </View>
          <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
            <Text style={styles.txtQuantity}>+</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.btnAddToCart}>
        <Text style={textSizeStyle.headerScreen}>Add to cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  imgPreview: {
    width: windowWidth,
    height: 220,
    backgroundColor: "#0000004D",
    resizeMode: "contain",
    marginBottom: 10,
  },
  btnAddToCart: {
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 9,
    paddingVertical: 10,
    marginHorizontal: distanceHorizontal,
    marginBottom: 10,
  },
  imgSmall: {
    width: 80,
    height: 80,
    backgroundColor: "#0000004D",
    resizeMode: "contain",
    marginRight: 10,
  },
  wrapViewQuantity: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  txtQuantity: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
