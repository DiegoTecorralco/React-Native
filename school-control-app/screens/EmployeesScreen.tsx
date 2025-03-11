import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

// Lista de empleados con imágenes
const employees = [
  {
    id: "1",
    name: "Carlos López",
    position: "Gerente",
    image: require("../assets/person.png"),
  },
  {
    id: "2",
    name: "Marta Sánchez",
    position: "Desarrolladora",
    image: require("../assets/person.png"),
  },
  {
    id: "3",
    name: "Pedro Díaz",
    position: "Diseñador",
    image: require("../assets/person.png"),
  },
  {
    id: "4",
    name: "Lucía Gómez",
    position: "Recursos Humanos",
    image: require("../assets/person.png"),
  },
];

const EmployeesScreen = () => {
  const renderItem = ({
    item,
  }: {
    item: { name: string; position: string; image: any };
  }) => (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.cardContent}>
          <Image source={item.image} style={styles.cardImage} />
          <View style={styles.textContainer}>
            <Title style={styles.cardTitle}>{item.name}</Title>
            <Paragraph style={styles.cardDescription}>
              Puesto: {item.position}
            </Paragraph>
          </View>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Nuestros Empleados</Text>
      <FlatList
        data={employees}
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
  });

export default EmployeesScreen;
