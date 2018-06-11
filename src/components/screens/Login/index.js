import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import LoadTabs from '../Tabs';
import Logo from './logo';
import LoginPanel from './loginPanel';
import { getOrientation, setOrientationListener, removeOrientationListener } from '../../utils/misc';


class Login extends Component {
    constructor() {
        super()
        this.state = {
            orientation: getOrientation(500)
        }
        //這韓式參數是一個callback
        setOrientationListener(this.changeOrientation)
    }

    changeOrientation = () => {
        this.setState({
            orientation: getOrientation(500)
        })
    }

    componentWillMount() {
        removeOrientationListener()
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo
                    orientation={this.state.orientation}
                />
                <LoginPanel
                    orientation={this.state.orientation}
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