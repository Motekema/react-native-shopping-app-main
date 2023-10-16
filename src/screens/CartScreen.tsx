import React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 

const foods = [
  {
    name: 'Food Item 1',
    ingredients: 'Ingredients for item 1',
    price: 10,
    image: require('../assets/images/image-3.jpg'),
  },
  {
    name: 'Food Item 2',
    ingredients: 'Ingredients for item 2',
    price: 20,
    image: require('../assets/images/image-2.jpg'),
  },
   {
    name: 'Food Item 3',
    ingredients: 'Ingredients for item 2',
    price: 60,
    image: require('../assets/images/image-4.jpg'),
  },
    {
    name: 'Food Item 4',
    ingredients: 'Ingredients for item 2',
    price: 40,
    image: require('../assets/images/image-6.jpg'),
  },
    {
    name: 'Food Item 5',
    ingredients: 'Ingredients for item 2',
    price: 40,
    image: require('../assets/images/image-7.jpg'),
  },
];

const CartScreen = ({navigation}) => {
  const CartCard = ({ item }) => (
    <View style={style.cartCard}>
      <Image source={item.image} style={{ height: 80, width: 80 }} />
      <View style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex: 1 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
        <Text style={{ fontSize: 13, color: 'grey' }}>{item.ingredients}</Text>
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>${item.price}</Text>
      </View>
      <View style={{ marginRight: 20, alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>3</Text>
        <View style={style.actionBtn}>
          <Icon name="chevron-double-left" size={25} color="white" />
          <Icon name="chevron-double-right" size={25} color="white" />
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView >
      
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={foods}
        renderItem={({ item }) => <CartCard item={item} />}
        ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        ListFooterComponent={() => (
          <View>
            <View style={{ flexDirection: 'row',  justifyContent: 'space-between', marginVertical: 15 }}>
              <Text style={{ fontSize: 18, color: "#f0f8ff" , fontWeight: 'bold' }}>Total Price</Text>
              <Text style={{ fontSize: 18,color: "#f0f8ff", fontWeight: 'bold' }}>$50</Text>
            </View>  
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    backgroundColor: '#696969', // Add a suitable background color
    borderRadius: 25, // Adjust as needed
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    width: 95,
  },
});

export default CartScreen;
