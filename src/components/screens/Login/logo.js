import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';

class logo extends Component {

    state = {
        kidsAnim: new Animated.Value(0),
        mapAnim: new Animated.Value(0),
    }

    componentWillMount() {
        Animated.sequence([
            Animated.timing(this.state.kidsAnim, {
                toValue: 1,
                duration: 1000,
                easing: Easing.easeOutCubbic
            }),
            Animated.timing(this.state.mapAnim, {
                toValue: 1,
                duration: 500,
                easing: Easing.easeOutCubbic
            })
        ]).start(() => {
            this.props.showLogin();
        })
    };

    render() {
        //偵測螢幕狀態
        console.log(this.props.orientation)
        return (
            <View>
                <View style={
                    this.props.orientation === "portrait"
                        ? styles.logoStylesPortrait
                        : styles.logoStylesLandscope
                }>
                    <Animated.View style={{
                        opacity: this.state.kidsAnim,
                        top: this.state.kidsAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [100, 0]
                        })

                    }}>
                        <Text style={styles.kids}>Kids</Text>
                    </Animated.View>
                    <Animated.View style={{
                        opacity: this.state.mapAnim,
                    }}>
                        <Text style={styles.map}>map</Text>
                    </Animated.View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logoStylesPortrait: {
        marginTop: 50,
        flex: 1,
        flexDirection: 'row',
        maxHeight: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoStylesLandscope: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        maxHeight: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    kids: {
        fontSize: 48,
        fontFamily: 'ChalkboardSE-Regular',
        color: '#FFFFFF',
    },
    map: {
        fontSize: 48,
        fontFamily: 'ChalkboardSE-Regular',
        color: '#FFE371'
    }

})

export default logo;