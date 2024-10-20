import { View, Text, Image, StyleSheet, Pressable, Button, Alert } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

const sizes = ['S', 'M', 'L', 'XL'];

const NextScreen = () => {
    const { id, title, price, image } = useLocalSearchParams();
    
    const [quantity, setQuantity] = useState(1);  // State for quantity
    const [totalPrice, setTotalPrice] = useState(price);  // State for total price
    const [sizeofpizza, setSizeofpizza] = useState('S');  // State for selected size
    const [cart, setCart] = useState([]);  // State for cart items

    // Increase quantity and update total price
    const increaseQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        setTotalPrice((newQuantity * price).toFixed(2)); // Update total price
    };

    // Decrease quantity and update total price
    const decreaseQuantity = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            setTotalPrice((newQuantity * price).toFixed(2)); // Update total price
        }
    };

    // Function to select size
    const sizeSelect = (data) => {
        setSizeofpizza(data);
    };

    // Add to Cart function
    const addToCart = () => {
        const item = {
            id,
            title,
            image,
            size: sizeofpizza,
            quantity,
            totalPrice
        };

        // Add item to cart and log it to console
        setCart([...cart, item]);
        console.log('Cart:', [...cart, item]);

        // Optional: Show an alert that the item was added
        Alert.alert('Item Added', `You have added ${title} (${sizeofpizza}) to the cart.`);
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Navbar */}
            <View style={styles.navbar}>
                <Text style={styles.navbarTitle}>{title}</Text>
            </View>

            {/* Image Section */}
            <Image source={{ uri: image }} style={styles.image} />

            {/* Pizza Title and Price */}
            <Text style={styles.price}>Price: {price}</Text>

            {/* Size Selection */}
            <View style={styles.sizeContainer}>
                {sizes.map((data) => (
                    <Pressable 
                        key={data} 
                        onPress={() => sizeSelect(data)} 
                        style={[styles.sizeButton, { backgroundColor: sizeofpizza === data ? 'red' : 'grey' }]}>
                        <Text style={styles.textS}> {data} </Text>
                    </Pressable>
                ))}
            </View>

            {/* Quantity Controls */}
            <View style={styles.quantityContainer}>
                <Button title="-" onPress={decreaseQuantity} />
                <Text style={styles.quantityText}>{quantity}</Text>
                <Button title="+" onPress={increaseQuantity} />
            </View>

            {/* Add to Cart Button */}
            <Pressable onPress={addToCart} style={styles.addToCartButton}>
                <Text style={styles.addToCartText}>Add to Cart</Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default NextScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightbrown',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navbar: {
        width: '100%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    navbarTitle: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: '80%',
        aspectRatio: 1,
        resizeMode: 'contain',
        marginBottom: 2,
    },
    price: {
        fontSize: 16,
  
        textAlign: 'center',
    },
    sizeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 20,
        width: '100%',
    },
    sizeButton: {
        width: 35,
        height: 35,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textS: {
        color: 'white',
        fontSize: 16,
    },
    quantityContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    quantityText: {
        marginHorizontal: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
    addToCartButton: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        width: '80%',
        alignItems: 'center',
    },
    addToCartText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
