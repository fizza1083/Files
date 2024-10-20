import { StyleSheet, Image, ScrollView } from 'react-native';
import { Text, View } from '@/src/components/Themed';

// Define the type for the productprops
interface ProductProps {
  image: string;
  name: string;
  price: string;
}

// Add the type for productprops in PizzaComponent
export default function PizzaComponent({ productprops }: { productprops: ProductProps[] }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {productprops.map((data, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={{ uri: data.image }} style={styles.image} />
            <Text style={styles.name}> {data.name} </Text>
            <Text style={styles.name}> {data.price} </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    margin: 100, // Adds margin around each image container
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 1,
  },
  name: {
    fontSize: 42,
    textAlign: 'center', // Center text horizontally
  },
});
