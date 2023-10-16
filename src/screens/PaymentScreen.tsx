import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

function PaymentScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <Text style={styles.visualCard}>Visual Card</Text>
        <View style={styles.microchip}>
          <Icon name="chip" color="gold" size={30} />
          <View style={styles.horizontalSeparator} />
          <Icon name="contactless-payment-circle-outline" color="white" size={30} />
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
      <View>
         <Text style={styles.Amount}>Amount: R 7500</Text>
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
    marginHorizontal: 0.05 * width,
    height: 250,
    backgroundColor: '#4b0082',
    marginTop: 15,
    borderRadius: 10,
  },
  cardHeader: {
    marginHorizontal: 0.1 * width,
  },
  microchip: {
    marginTop: 0.15 * height,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  horizontalSeparator: {
    width: 0.03 * width,
  },
  cardNumber: {
    fontStyle: 'normal',
    fontSize: 20,
    color: '#f8f8ff',
    paddingLeft: 0.02 * width,
  },
  expiresEnd: {
    color: '#f8f8ff',
    fontSize: 10,
    margin: 1,
    paddingLeft: 0.2 * width,
  },
  expiresEndNumber: {
    color: '#f8f8ff',
    fontSize: 16,
    margin: 1,
    paddingLeft: 0.36 * width,
  },
  cardType: {
    color: '#f8f8ff',
    fontSize: 16,
    margin: 20,
    marginBottom: 1,
    paddingLeft: 0.33 * width,
  },
  visualCard: {
    color: '#f8f8ff',
    fontSize: 16,
    marginBottom: -50,
    margin: 18,
    marginLeft: 0.41 * width,
  },
  Amount:{
    marginHorizontal: 0.01 * width,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginTop: 45,
    borderRadius: 10,
    alignItems: 'center',
    fontSize: 30, 
    justifyContent: 'center',
    paddingLeft: 10,
  },
  payButton: {
    backgroundColor: 'green',
    width: 0.7 * width,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  payButtonText: {
    color: 'white',
    fontSize: 18,
  },
});
