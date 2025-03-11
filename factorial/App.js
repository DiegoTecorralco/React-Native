import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [email, setEmail] = useState ("");
  const [password, setPassword]= useState("");
  const [numberOne, setNumberOne] = useState("");
  const [result, setResult] = useState("");
  const hendleLogin = () =>{
    if(email === "" || password === ""){
      Alert.alert("Error", "por favr ingrese correo electrónico y contraseña")
    } else {
      Alert.alert("Bienvenido!", "Has onocoadp sesión correctamente");
    }
  };
  
  // Función para calcular el factorial
  const calcularFactorial = (num) => {
    if (num < 0) return "El número debe ser mayor o igual a 0"; // Factorial no definido para números negativos
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  };

  // Función que maneja el botón
  const hendleBtnSum = () => {
    const num = parseInt(numberOne);
    if (!isNaN(num)) {
      setResult(calcularFactorial(num));
    } else {
      setResult("Por favor ingresa un número válido.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Obtener el Valor Factorial de un Número</Text>
      <TextInput
        value={numberOne}
        onChangeText={setNumberOne}
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ingresa el primer valor"
      />
      <Button
        title="Obtener"
        onPress={hendleBtnSum}
        style={styles.btn}
      />
      <Text style={styles.title}>Resultado: {result}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#efefef',
    marginBottom: 10,
    padding: 10,
    fontSize: 18,
  },
  btn: {
    borderRadius: 6,
    backgroundColor: '#5956EB',
  },
});
