import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
//import LoadTabs from '../Tabs';
import Logo from './logo';
import LoginPanel from './loginPanel';
import LinearGradient from 'react-native-linear-gradient';
import { getOrientation, setOrientationListener, removeOrientationListener } from '../../utils/misc';


class Login extends Component {
    constructor() {
        super()
        this.state = {
            orientation: getOrientation(500),
            //當true時代表動畫已經結束
            logoAnimation: false
        }
        //這韓式參數是一個callback
        setOrientationListener(this.changeOrientation)
    }

    changeOrientation = () => {
        this.setState({
            orientation: getOrientation(500)
        })
    }

    showLogin = () => {
        this.setState({
            logoAnimation: true
        })
    }

    componentWillMount() {
        removeOrientationListener()
    }

    render() {
        return (
            <LinearGradient colors={['#6BD5FF', '#00A6E7']} style={styles.gradient} locations={[0, 1.0]}>
                <ScrollView>
                    <View style={styles.container}>
                        <Logo
                            showLogin={this.showLogin}
                            orientation={this.state.orientation}
                        />
                        <LoginPanel
                            orientation={this.state.orientation}
                            show={this.state.logoAnimation}
                        />
                    </View>
                </ScrollView>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Login;