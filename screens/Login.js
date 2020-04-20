import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


class Login extends Component {

    handleRegisterPage = () => {
        this.props.navigation.navigate('Register page')
    }

    handleEnter = () => {
        this.props.navigation.navigate('Main Page')
    }

    render() {

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Login</Text>
                <Button  title='Register' onPress={this.handleRegisterPage} />

                <Button style={{ margin: '10px' }} title = 'enter' onPress={this.handleEnter}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});

export default Login;