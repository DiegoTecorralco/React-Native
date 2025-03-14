import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ProductsScreen from "./screens/ProductsScreen";
import EmployeesScreen from "./screens/EmployeesScreen";
import AddEmployeeScreen from './screens/AddEmployeeScreen'

const Stack = createStackNavigator();

const agregarEmpleado= () => {

}
const agregarProducto =() =>{

}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Employees" component={EmployeesScreen} />
        <Stack.Screen name="AddEmployee" component={AddEmployeeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
