import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function PaymentScreen() {
  return (
    <View>
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <Text style={styles.visualCard}>Visual Card</Text>
        <View style={styles.microchip}>
          <Icon name="chip" color="gold" size={45} />
          <View style={styles.horizontalSeparator} />
          <Icon name="contactless-payment-circle-outline" color="white" size={45} />
          <Text style={styles.cardType}>debit</Text>
        </View>
        <Text style={styles.cardNumber}>5879   0888   5634   5647</Text>
        <View>
          <Text style={styles.expiresEnd}>EXPIRES END</Text>
        </View>
        <View>
          <Text style={styles.expiresEndNumber}>04/28</Text>
        </View>
      </View>
    </View>
    <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
}

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    height: 250,
    backgroundColor: '#0000ff',
    marginTop: 15,
    borderRadius: 10,
  },
  cardHeader: {
    marginHorizontal: 35,
  },
  microchip: {
    marginTop: 95,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  horizontalSeparator: {
    width: 10,
  },
  cardNumber: {
    fontStyle: 'normal',
    fontSize: 25,
    color: '#f8f8ff',
    paddingLeft: 10,
  },
  expiresEnd: {
    color: '#f8f8ff',
    fontSize: 11,
    margin: 1,
    paddingLeft: 100,
  },
  expiresEndNumber: {
    color: '#f8f8ff',
    fontSize: 18,
    margin: 1,
    paddingLeft: 180,
  },
  cardType: {
    color: '#f8f8ff',
    fontSize: 18,
    margin: 20,
    marginBottom: 1,
    paddingLeft: 165,
  },
  visualCard: {
    color: '#f8f8ff',
    fontSize: 18,
    marginBottom: -50,
    margin: 18,
    marginLeft: 210,
  },
  payButton: {
    backgroundColor: 'green',
    width: 300,
    paddingHorizontal: 15, // Instead of paddingleft
    paddingVertical: 15, // Add paddingVertical for top and bottom padding
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center', // Align the button in the center horizontally
    alignItems: 'center', // Align the button's content in the center horizontally
    justifyContent: 'center', // Align the button's content in the center vertically
  },
  payButtonText: {
    color: 'white',
    fontSize: 20,
  },
});