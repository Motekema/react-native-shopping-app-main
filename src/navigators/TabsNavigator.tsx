import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CartScreen from "../screens/CartScreen";
import Icons from "@expo/vector-icons/MaterialIcons";
import { CompositeScreenProps } from "@react-navigation/native";
import { RootStackScreenProps } from "./RootNavigator";
import CustomBottomTabs from "../components/CustomBottomTabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Avatar,
  Title,
  Caption,
  TouchableRipple,
} from 'react-native-paper';
import PaymentScreen from "../screens/PaymentScreen";

export type TabsStackParamList = {
  Home: undefined;
  Cart: undefined;
  Payment: undefined;
  Profile: undefined;
};
const TabsStack = createBottomTabNavigator<TabsStackParamList>();

export type TabsStackScreenProps<T extends keyof TabsStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabsStackParamList, T>,
    RootStackScreenProps<"TabsStack">
  >;

const TabsNavigator = () => {

   const handleMenuPress = () => {
    // Handle the menu button action here
  };

  const handleAccountEditPress = () => {
    // Handle the account-edit button action here
  };

  return (
    <TabsStack.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
      tabBar={(props) => <CustomBottomTabs {...props} />}
    >
      <TabsStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return <Icons name="home" {...props} />;
          },
        }}
      />
      <TabsStack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon(props) {
            return <Icons name="shopping-cart" {...props} />;
          },
        }}
      />
      <TabsStack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          title: "",
          tabBarIcon: (props) => <Icons name="account-balance-wallet" {...props} />,
         headerRight: () => (
         <View style={styles.iconContainer}>
           <TouchableRipple onPress={handleMenuPress}>
           <Icon name="menu" color="#777777" size={40} />
           </TouchableRipple>
           <View style={styles.horizontalSeparator} />
           <TouchableRipple onPress={handleAccountEditPress}>
           <Icon name="account-details" color="#777777" size={40} />
          </TouchableRipple>
        </View>
         ),
        }}
      />
      <TabsStack.Screen
         name="Profile"
         component={ProfileScreen}
         options={{
         title: '',
         tabBarIcon: (props) => <Icons name="person" {...props} />,
         headerRight: () => (
         <View style={styles.iconContainer}>
           <TouchableRipple onPress={handleMenuPress}>
           <Icon name="menu" color="#777777" size={40} />
           </TouchableRipple>
           <View style={styles.horizontalSeparator} />
           <TouchableRipple onPress={handleAccountEditPress}>
           <Icon name="account-edit" color="#777777" size={40} />
          </TouchableRipple>
        </View>
    ),
  }}
/>
    </TabsStack.Navigator>
  );
};

export default TabsNavigator;

const Example = () => {
  return <View />;
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row', 
    justifyContent: "flex-end",      // Arrange items horizontally
    alignItems: 'center', 
  },
  horizontalSeparator: {
     width: 330,                // Adjust the space between icons
  },

})