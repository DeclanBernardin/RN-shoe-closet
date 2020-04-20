import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Register from '../screens/Register';
import MainPage from '../screens/MainPage';
import MyShoes from '../screens/MyShoes'; 
import WishList from '../screens/WishList';
import Shoe from '../screens/Shoe';
import NewShoe from '../screens/NewShoe';



class PlacesNavigation extends Component {



    render() {

        const Stack = createStackNavigator();

        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login Page" component={Login} options={{ title: 'Application name'  }} />
                    <Stack.Screen name="Register page" component={Register} options={{ title: 'Application name'  }} />
                    <Stack.Screen name="Main Page" component={MainPage} options={{ title: 'App Name' }} />
                    <Stack.Screen name="My Shoes" component={MyShoes} options={{ title: 'My Shoes' }} />
                    <Stack.Screen name="Wish List" component={WishList} options={{ title: 'My Wish List' }} />
                    <Stack.Screen name="Shoe" component={Shoe} options={{ title: 'Shoe' }} />
                    <Stack.Screen name="New Shoe" component={NewShoe} options={{ title: 'Add New Shoe' }} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({

});

export default PlacesNavigation;