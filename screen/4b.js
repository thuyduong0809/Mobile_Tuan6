import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";

const products = [
  {
    id: "1",
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    rating: "3",
    reviewCount: "(15)",
    discount: "-39%",
    image: require("../assets/giacchuyen 1.png"),
  },
  {
    id: "2",
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    rating: "3",
    reviewCount: "(15)",
    discount: "-39%",
    image: require("../assets/daynguon 1.png"),
  },
  {
    id: "3",
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    rating: "3",
    reviewCount: "(15)",
    discount: "-39%",
    image: require("../assets/dauchuyendoipsps2 1.png"),
  },
  {
    id: "4",
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    rating: "3",
    reviewCount: "(15)",
    discount: "-39%",
    image: require("../assets/dauchuyendoi 1.png"),
  },
  {
    id: "5",
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    rating: "3",
    reviewCount: "(15)",
    discount: "-39%",
    image: require("../assets/carbusbtops2 1.png"),
  },
  {
    id: "6",
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    rating: "3",
    reviewCount: "(15)",
    discount: "-39%",
    image: require("../assets/daucam 1.png"),
  },
];

const Screen4_b = () => {
  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productRating}>★ ★ ★ ☆ ☆</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <Image
            source={require("../assets/ant-design_arrow-left-outlined.png")}
          />
        </TouchableOpacity>
        <TextInput style={styles.searchInput} placeholder="Dây cáp usb" />
        <TouchableOpacity style={styles.headerButton}>
          <Image source={require("../assets/bi_cart-check.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Image source={require("../assets/Group 2.png")} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require("../assets/Group 10.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image
            source={require("../assets/Vector (Stroke).png")}
            style={{ color: "black" }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require("../assets/Vector 1 (Stroke).png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0E0E0",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  headerButton: {
    padding: 5,
  },
  searchInput: {
    flex: 1,
    width: "192px",
    height: "30px",
    backgroundColor: "#FFF",
    paddingHorizontal: 15,
    marginHorizontal: 10,
  },
  productContainer: {
    flex: 1,
    backgroundColor: "#FFF",
    margin: 5,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  productImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    textAlign: "center",
    color: "#000",
  },
  productRating: {
    fontSize: 12,
    color: "#FFD700",
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
  },
  productList: {
    paddingHorizontal: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#007AFF",
    paddingVertical: 10,
  },
  footerButton: {
    padding: 5,
  },
});

export default Screen4_b;
