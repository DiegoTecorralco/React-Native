import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons"; // Asegúrate de tener instalada esta biblioteca

// Lista de productos con imágenes
const products = [
  {
    id: "1",
    name: "Cámara Digital",
    price: 500,
    image: require("../assets/products.jpg"),
  },
  {
    id: "2",
    name: "Auriculares Bluetooth",
    price: 120,
    image: require("../assets/products.jpg"),
  },
  {
    id: "3",
    name: "Smartwatch",
    price: 150,
    image: require("../assets/products.jpg"),
  },
  {
    id: "4",
    name: "Portátil Gaming",
    price: 1000,
    image: require("../assets/products.jpg"),
  },
];

const ProductsScreen = () => {
  const renderItem = ({
    item,
  }: {
    item: { name: string; price: number; image: any };
  }) => (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.cardContent}>
          <Image source={item.image} style={styles.cardImage} />
          <View style={styles.textContainer}>
            <Title style={styles.cardTitle}>{item.name}</Title>
            <Paragraph style={styles.cardDescription}>
              Precio: ${item.price}
            </Paragraph>
          </View>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Nuestros Productos</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity
        style={styles.fab}
        onPress={() => console.log("Add Product")}
      >
        <Icon name="add" size={30} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1", // Fondo más claro
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333", // Título de color gris oscuro
  },
  card: {
    backgroundColor: "#fff", // Fondo blanco para las cards
    marginBottom: 20,
    borderRadius: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333", // Título gris oscuro
  },
  cardDescription: {
    fontSize: 16,
    color: "#777", // Descripción gris medio
  },
  listContainer: {
    paddingBottom: 20,
  },
  fab: {
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: "#03A9F4",
    borderRadius: 30,
    elevation: 8,
  },
});

export default ProductsScreen;
