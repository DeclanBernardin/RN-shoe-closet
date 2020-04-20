import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


class MainPage extends Component {

    handleShoes = () => {
        this.props.navigation.navigate('My Shoes')
    }

    handleWishList = () => {
        this.props.navigation.navigate('Wish List')
    }

    render() {

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title='My Shoes' onPress={this.handleShoes} />
                <Button title='My Wish List' onPress={this.handleWishList} />
            </View>
        )
    }
}

const styles = StyleSheet.create({

});

export default MainPage;