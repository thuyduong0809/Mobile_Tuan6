import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const products = [
  {
    id: "1",
    name: "Ca nấu lẩu, nấu mì mini...",
    shop: "Shop Devang",
    image: require("../assets/ca_nau_lau.png"),
  },
  {
    id: "2",
    name: "1KG KHÔ GÀ BƠ TỎI...",
    shop: "Shop LTD Food",
    image: require("../assets/ga_bo_toi.png"),
  },
  {
    id: "3",
    name: "Xe cần cẩu đa năng",
    shop: "Shop Thế giới đồ chơi",
    image: require("../assets/xa_can_cau.png"),
  },
  {
    id: "4",
    name: "Đồ chơi dạng mô hình",
    shop: "Shop Thế giới đồ chơi",
    image: require("../assets/do_choi_dang_mo_hinh.png"),
  },
  {
    id: "5",
    name: "Lãnh đạo giản đơn",
    shop: "Shop Minh Long Book",
    image: require("../assets/lanh_dao_gian_don.png"),
  },
  {
    id: "6",
    name: "Hiểu lòng con trẻ",
    shop: "Shop Minh Long Book",
    image: require("../assets/hieu_long_con_tre.png"),
  },
];

const Screen4_a = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.shopName}>{item.shop}</Text>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
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
        <Text style={styles.headerTitle}>Chat</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Image source={require("../assets/bi_cart-check.png")} />
        </TouchableOpacity>
      </View>

      <Text style={styles.headerText}>
        Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
      </Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
    backgroundColor: "#F0F0F0",
    paddingTop: 20,
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
  headerButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerText: {
    textAlign: "center",
    marginBottom: 10,
    color: "#000",
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  shopName: {
    fontSize: 12,
    color: "#888",
  },
  chatButton: {
    backgroundColor: "#FF0000",
    justifyContent: "center",
    alignContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  chatButtonText: {
    color: "#FFFFFF",
    alignContent: "center",
    fontWeight: "bold",
    width: "50px",
    height: "20px",
    justifyContent: "center",
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
  footerButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});

export default Screen4_a;
