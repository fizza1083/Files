import { StyleSheet, Image, View, Text, FlatList, Pressable, RefreshControl } from 'react-native';
import { Link } from 'expo-router';
import React, { useState } from 'react';

const Item = ({ title }) => (
  <Link
    href={{
      pathname: '/NewScreen',
      params: {
        id: title.id,
        title: title.title,
        price: title.price,
        image: title.image,
      },
    }}
    asChild
  >
    <Pressable style={styles.renderitem}>
      <Image source={{ uri: title.image }} style={styles.image} />
      <Text style={styles.title}>{title.title}</Text>
      <Text style={styles.price}>{title.price}</Text>
    </Pressable>
  </Link>
);

export default function MyPizzaComponent({ myProps }) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate a network request or data reload here
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={myProps}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        // Enables infinite scroll behavior
        onEndReachedThreshold={0.5} 
        onEndReached={() => {
          console.log("Load more items");
          // You can trigger loading more items here
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 20,
    alignContent: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150, // Fixed width for uniform size
    height: 150, // Fixed height for uniform size
    resizeMode: 'cover', // Ensures the image fills the box
    borderRadius: 15, // Slightly rounded corners
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
  price: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
  renderitem: {
    flex: 1,
    alignItems: 'center', // Center the image and text within the Pressable
    justifyContent: 'center',
  },
});
