import React from 'react'
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function PaymentScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <View style={styles.microchip}>
            <Icon name="chip" color="gold" size={45}/>
            <View style={styles.horizontalSeparator}/>   
            <Icon name="contactless-payment-circle-outline" color="white" size={45}/>
        </View>
        <Text style={styles.cardNumber}>5879   0888   5634   5647</Text> 
        <View>
            <Text style={styles.expiresEnd}>EXPIRES END</Text>
        </View> 
      </View>
    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 20,
    height: 250,
    backgroundColor: 'black',
    marginTop: 15,
    borderRadius: 10,
  },
  cardHeader:{
   marginHorizontal: 35, 
  },
  microchip:{
    marginTop: 95,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  horizontalSeparator:{
    width: 10,
  },
  cardNumber:{
    fontStyle: 'normal',
    fontSize: 25,
    color: '#f8f8ff',
    justifyContent: "flex-start",
  },
  expiresEnd:{
    color: '#f8f8ff',
    fontSize: 11,
    margin:1,
    alignItems: 'center',
  }
})