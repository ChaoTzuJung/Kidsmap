import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, Easing, TouchableOpacity, Image, Dimensions } from 'react-native';
import LoginForm from './loginForm';
import GoogleLoginIcon from '../../../assets/images/icons8Google.png';
import FacebookLoginIcon from '../../../assets/images/icons8Facebook.png';
import { hidden } from 'ansi-colors';

const { height, width } = Dimensions.get('window');

class loginPanel extends Component {
    //01. Where is it
    state = {
        animFinished: false,
        ThirdButton: new Animated.Value(0),
        inputForm: new Animated.Value(0)
    }
    ////02. Where is gonna to
    componentWillReceiveProps(nextProps) {
        if (nextProps.show && !this.state.animFinished) {
            Animated.parallel([
                Animated.timing(this.state.ThirdButton, {
                    toValue: 1,
                    duration: 1000
                }),
                Animated.timing(this.state.inputForm, {
                    toValue: 1,
                    duration: 1500
                }),
            ]).start(
                this.setState({ animFinished: true })
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View
                    //03. What Happen with component
                    style={{
                        opacity: this.state.ThirdButton,
                    }}
                >
                    <View style={
                        this.props.orientation === "portrait"
                            ? styles.ThirdPartyPortrait
                            : styles.ThirdPartyLandscope
                    }>
                        <Text style={styles.TextStyle}>藉由以下帳戶快速登入</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={this._handleGoogleLogin}>
                                <View
                                    style={styles.buttonStyle}
                                >
                                    <Image
                                        source={GoogleLoginIcon}
                                        resizeMode={'contain'}
                                    />
                                    <Text style={styles.ThirdPartyLoginTextStyle}>Google</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this._handleFacebookLogin}>
                                <View style={styles.buttonStyle}>
                                    <Image
                                        source={FacebookLoginIcon}
                                        resizeMode={'contain'}
                                    />
                                    <Text style={styles.ThirdPartyLoginTextStyle}>Facebook</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animated.View>
                <Animated.View
                    style={{
                        opacity: this.state.inputForm,
                        top: this.state.inputForm.interpolate({
                            inputRange: [0, 1],
                            outputRange: [100, 30]
                        })
                    }}
                >
                    <View style={
                        this.props.orientation === "portrait"
                            ? styles.FormFieldPortrait
                            : styles.FormFieldLandscope
                    }>
                        <Text style={styles.TextStyle}>或用您的用戶名登入</Text>
                        <LoginForm />
                    </View>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    TextStyle: {
        fontSize: 12,
        letterSpacing: 1.3,
        textAlign: 'left',
        fontFamily: 'PingFangSC-Semibold',
        color: '#fff',
        marginLeft: 10
    },
    ThirdPartyLoginTextStyle: {
        color: 'rgb(85,85,85)',
        fontSize: 16,
        letterSpacing: 1.8,
        textAlign: 'left',
        fontFamily: 'PingFangSC-Semibold',
        marginLeft: 14
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    buttonStyle: {
        flexDirection: 'row',
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        borderColor: 'rgb(193,193,193)',
        borderRadius: 12,
        borderWidth: 1.6,
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 8,
        marginRight: 8
    },
    ThirdPartyPortrait: {
        display: 'flex',

    },
    ThirdPartyLandscope: {
        display: 'none',
    },
    FormFieldPortrait: {
        marginLeft: 0,
    },
    FormFieldLandscope: {
        marginLeft: width * -0.25,

    }

})

export default loginPanel;