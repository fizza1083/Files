import React from 'react'; 
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Pressable, Text, View, StyleSheet } from 'react-native';

import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/components/useColorScheme';
import { useClientOnlyValue } from '@/src/components/useClientOnlyValue';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: useClientOnlyValue(true, true), // Enable header for navigation
        }}>
        {/* Tab 1 */}
        <Tabs.Screen
  name="index"
  options={{
    title: '        our menu', // Title for the screen
    headerStyle: {
      backgroundColor: 'lightyellow', // Light pink background color
    },
    tabBarIcon: ({ color }) => <TabBarIcon name="cutlery" color={color} />,
    headerLeft: () => (
      <Pressable onPress={() => console.log('Back pressed')}>
        <FontAwesome name="arrow-left" size={24} color="black" style={{ marginLeft: 15 }} />
      </Pressable>
  

            ),
            headerRight: () => (
              <Pressable onPress={() => console.log('Cart pressed')}>
                <FontAwesome name="shopping-cart" size={24} color="black" style={{ marginRight: 15 }} />
              </Pressable>
            ),
            headerTitle: () => (
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>OUR MENU</Text>
            ),
          }}
        />
        {/* Tab 2 */}
        <Tabs.Screen
          name="two"
          options={{
            title: 'Chat',
            tabBarIcon: ({ color }) => <TabBarIcon name="comments" color={color} />,
          }}
        />
        {/* Tab 3 */}
        <Tabs.Screen
          name="three"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          }}
        />
        {/* Tab 4 */}
        <Tabs.Screen
          name="four"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          }}
        />
        {/* Tab 5 */}
        <Tabs.Screen
          name="five"
          options={{
            title: 'favorite',
            tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow'
  },
});
