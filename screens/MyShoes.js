import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


class MyShoes extends Component {

    handleShoe = () => {
        this.props.navigation.navigate('Shoe')
    }

    handleAddShoe = () => {
        this.props.navigation.navigate('New Shoe')
    }


    render() {

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>my Shoes</Text>
                <Button title='shoe' onPress={this.handleShoe} />

                <Button title='Add Shoe' onPress={this.handleAddShoe}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});

export default MyShoes;