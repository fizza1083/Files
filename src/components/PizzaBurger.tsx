import { StyleSheet, Image, View, Text, FlatList, TouchableOpacity } from 'react-native';

// Define the type for the item prop
const Item = ({ title, onPress }: { title: { image: string; title: string; price: string }, onPress: () => void }) => (
  <View style={styles.itemContainer}>
    <TouchableOpacity onPress={onPress}>
      <Image source={{ uri: title.image }} style={styles.image} />
    </TouchableOpacity>
    <Text style={styles.title}>{title.title}</Text>
    <Text style={styles.title}>{title.price}</Text>
  </View>
);

interface PizzaBurgerProps {
  myProps: { id: number | string; image: string; title: string; price: string }[];
}

export default function PizzaBurger({ myProps }: PizzaBurgerProps) {
  const handleImagePress = (item: any) => {
    console.log('Image clicked:', item);
    // You can add additional logic for when the image is clicked, such as navigation
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={myProps}
        renderItem={({ item }) => (
          <Item
            title={item}
            onPress={() => handleImagePress(item)} // Handle the image click event
          />
        )}
        keyExtractor={(item) => item.id.toString()} // Convert id to string for key
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.95,
  },
  itemContainer: {
    margin: 10, // Adds margin around each item container (image + text)
  },
  image: {
    width: 170,
    aspectRatio:   1,
    margin: 10, // Adds margin around the image itself
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});
