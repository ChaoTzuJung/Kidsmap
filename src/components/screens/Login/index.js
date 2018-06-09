import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LoadTabs from '../Tabs';

class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>
                <Button
                    title="go to home"
                    onPress={() => {
                        LoadTabs();
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Login;