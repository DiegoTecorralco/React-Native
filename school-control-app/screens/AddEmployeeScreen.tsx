import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const AddEmployeeScreen = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const handleAddEmployee = () => {
    // Aquí puedes agregar la lógica para agregar un empleado
    console.log("Empleado agregado:", { name, position });
    // Limpiar campos del formulario
    setName("");
    setPosition("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Agregar Nuevo Empleado</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Puesto"
        value={position}
        onChangeText={(text) => setPosition(text)}
      />
      <Button title="Agregar Empleado" onPress={handleAddEmployee} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
});

export default AddEmployeeScreen;
