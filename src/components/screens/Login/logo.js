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
                    this.props.orientation === "protrait"
                        ? styles.logoStylesPortait
                        : styles.logoStylesLandscope
                }>
                    <Animated.View style={{
                        opacity: this.state.kidsAnim,
                        top: this.state.kidsAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [100, 0]
                        })

                    }}>
                        <Text style={styles.sell}>Kids</Text>
                    </Animated.View>
                    <Animated.View style={{
                        opacity: this.state.mapAnim,
                    }}>
                        <Text style={styles.it}>map</Text>
                    </Animated.View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logoStylesPortait: {
        marginTop: 50,
        flex: 1,
        flexDirection: 'row',
        maxHeight: 100
    },
    logoStylesLandscope: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
        maxHeight: 50
    },
    sell: {
        fontSize: 40,
        fontFamily: 'ChalkboardSE-Regular',
        color: 'rgb(0,166,231)'
    },
    it: {
        fontSize: 40,
        fontFamily: 'ChalkboardSE-Regular',
        color: 'rgb(255,227,127)'
    }

})

export default logo;