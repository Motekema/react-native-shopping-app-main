import { View, Text, Image, SafeAreaView, StyleSheet,TouchableOpacity, FlatList } from 'react-native';
import Icons from "@expo/vector-icons/MaterialIcons"; 
import React, { useRef, useState } from "react";

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

    const [count, setCount] = useState(1);

  const CartCard = ({ item }) => (
    <View style={style.cartCard}>
      <Image source={item.image} style={{ height: 80, width: 80 }} />
      <View style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex: 1 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
        <Text style={{ fontSize: 13, color: 'grey' }}>{item.ingredients}</Text>
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>${item.price}</Text>
      </View>
      <View style={{ marginRight: 20, alignItems: 'center' }}>
        <View style={style.actionBtn}>
          <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                backgroundColor: 'gray',
                padding: 6,
                borderRadius: 100,
              }}
            >
              <TouchableOpacity
                onPress={() => setCount((count) => Math.max(1, count - 1))}
                style={{
                  backgroundColor: 'black',
                  width: 34,
                  aspectRatio: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 34,
                }}
              >
                <Icons name="remove" size={20} color='white' />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: 'black',
                }}
              >
                {count}
              </Text>
              <TouchableOpacity
                onPress={() => setCount((count) => Math.min(10, count + 1))}
                style={{
                  backgroundColor: 'black',
                  width: 34,
                  aspectRatio: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 34,
                }}
              >
                <Icons name="add" size={20} color='white' />
              </TouchableOpacity>
            </View>
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
    // Add a suitable background color
    borderRadius: 25, // Adjust as needed
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    width: 95,
  },
});

export default CartScreen;
