import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const products = [
  {
    id: 1,
    name: "Pink Donut",
    price: 2.99,
    image: require("../DATA/Container 7 (2).png"),
    rating: 4.5,
  },
  {
    id: 2,
    name: "Cotton Candy",
    price: 3.99,
    image: require("../DATA/Container 7 (1).png"),
    rating: 4.7,
  },
  {
    id: 3,
    name: "Peach",
    price: 1.99,
    image: require("../DATA/Container 7 (3).png"),
    rating: 4.2,
  },
  {
    id: 4,
    name: "Cherry",
    price: 2.49,
    image: require("../DATA/Container 7.png"),
    rating: 4.8,
  },
];

const Screen4 = () => {
  const navigation = useNavigation();
  const [selectedProduct, setSelectedProduct] = useState(products[0]); // Sản phẩm đầu tiên được chọn
  const [quantity, setQuantity] = useState(1); // Số lượng mặc định là 1
  const [selectedSize, setSelectedSize] = useState("M"); // Kích thước mặc định là M

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const renderProductItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedProduct(item)}>
      <Image source={{ uri: item.image }} style={styles.thumbnailImage} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.productTitle}>{selectedProduct.name}</Text>
      <Image source={{ uri: selectedProduct.image }} style={styles.mainImage} />

      <FlatList
        horizontal
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProductItem}
        style={styles.thumbnailList}
      />

      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.productRating}>
        Rating: {selectedProduct.rating} ★
      </Text>

      <View style={styles.sizeContainer}>
        <Text style={styles.label}>Size</Text>
        <View style={styles.sizeOptions}>
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <TouchableOpacity
              key={size}
              style={[
                styles.sizeButton,
                selectedSize === size && styles.sizeButtonSelected,
              ]}
              onPress={() => handleSizeChange(size)}
            >
              <Text style={styles.sizeButtonText}>{size}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.quantityContainer}>
        <Text style={styles.label}>Quantity</Text>
        <View style={styles.quantityButtons}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => handleQuantityChange("decrease")}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityValue}>{quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => handleQuantityChange("increase")}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>
          Total: ${(selectedProduct.price * quantity).toFixed(2)}
        </Text>
      </View>

      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  productTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  mainImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 10,
  },
  thumbnailList: {
    marginBottom: 20,
  },
  thumbnailImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ccc",
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00c3ff",
  },
  productRating: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  sizeContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sizeOptions: {
    flexDirection: "row",
  },
  sizeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
    marginRight: 10,
  },
  sizeButtonSelected: {
    backgroundColor: "#00c3ff",
  },
  sizeButtonText: {
    fontSize: 16,
    color: "#333",
  },
  quantityContainer: {
    marginBottom: 20,
  },
  quantityButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
    marginHorizontal: 10,
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  quantityValue: {
    fontSize: 20,
  },
  totalContainer: {
    marginBottom: 20,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addToCartButton: {
    backgroundColor: "#00c3ff",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  addToCartText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Screen4;
