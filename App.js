import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AutoCounter from './pages/Counter/AutoCounter';
import AddProduct from './pages/AddProduct/AddProduct';
import Products from './pages/Products/Products';
import { colores } from './styles/colores.styles';

const Tab = createBottomTabNavigator();

export default function App() {


  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log(products)
  }, [products])

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            let iconName;

            switch (route.name) {
              case "Counter":
                iconName = focused
                  ? "timer"
                  : "timer-outline";
                break;

              case "AddProduct":
                iconName = focused
                  ? "add-circle"
                  : "add-circle-outline";
                break;

              case "Products":
                iconName = focused
                  ? "list-circle"
                  : "list-circle-outline";
                break;

              default:
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colores.primary,
          tabBarInactiveTintColor: "grey",
        })}
      >

        <Tab.Screen name="Counter" component={AutoCounter} />
        <Tab.Screen name="AddProduct" component={AddProduct} initialParams={{ setProducts }} />

        <Tab.Screen name="Products" >
          {() => <Products products={products} />}
        </Tab.Screen>

      </Tab.Navigator>

    </NavigationContainer>
  );
}
