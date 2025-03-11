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
import { Card, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

// Lista de categorías para HomeScreen
const categories = [
  {
    id: "1",
    title: "Empleados",
    image: require("../assets/person.png"),
    screen: "Employees",
  },
  {
    id: "2",
    title: "Productos",
    image: require("../assets/products.jpg"),
    screen: "Products",
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({
    item,
  }: {
    item: { title: string; image: any; screen: string };
  }) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
          <View style={styles.cardBody}>
            <Image source={item.image} style={styles.cardImage} />
            <Paragraph style={styles.cardDescription}>
              Haz clic para ver más
            </Paragraph>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bienvenidos a la App</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Fondo más claro para el Home
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333", // Título oscuro
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff", // Fondo blanco de las cards
    marginBottom: 20,
    borderRadius: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    width: "90%", // Ajuste para que las cards no se estiren demasiado
    alignSelf: "center", // Centra las cards
    height: 180, // Ajustar altura de las cards
  },
  cardHeader: {
    backgroundColor: "#4CAF50", // Fondo verde para el título de la card
    padding: 10,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff", // Título blanco
    textAlign: "center",
  },
  cardBody: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Centra el contenido dentro de la card
    padding: 10,
  },
  cardImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 20,
  },
  cardDescription: {
    fontSize: 16,
    color: "#777", // Descripción en gris medio
    textAlign: "center",
  },
  listContainer: {
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
