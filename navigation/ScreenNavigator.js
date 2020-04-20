import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




class PlacesNavigation extends Component {



    render() {

        const Stack = createStackNavigator();

        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="" component={} options={{ title:  }} />
                    <Stack.Screen name="" component={} options={{ title:  }} />
                    <Stack.Screen name="" component={} options={{ title:  }} />
                    <Stack.Screen name="" component={} options={{ title:  }} />
                    <Stack.Screen name="" component={} options={{ title:  }} />
                    <Stack.Screen name="" component={} options={{ title:  }} />
                    <Stack.Screen name="" component={} options={{ title:  }} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({

});

export default PlacesNavigation;