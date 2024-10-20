import { StyleSheet, Image, View, Text } from 'react-native';
import PizzaBurger from '@/src/components/PizzaBurger';
import pizzArray from '@/src/Data/PizzaDetail';
import TopBarScreen from '@/src/components/TopBarScreen';

 import CustomNavBar
 from '@/src/components/CustomNavBar';
import MyPizzaComponent from '@/src/components/MyPizzaComponent';

export default function TabOneScreen() {

  return (
    <View style={styles.container}>
     
      <CustomNavBar />
      <MyPizzaComponent myProps={pizzArray}/>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  // alignItems: 'center',
  // justifyContent: 'center',
},
image:{
  width:'100%', 
  aspectRatio:2/1,
},
name:{
fontSize:20
},
title:{
  fontSize:50
}
});