import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class LoginForm extends Component {
    state = {
        form: {
            email: {
                value: '',
                valid: false, //沒警告
                type: 'textinput',
                rules: {
                    isEmail: true
                }
            },
            password: {
                value: '',
                valid: false,
                type: 'textinput',
                rules: {
                    minLength: 6
                }
            },
            comfirmPassword: {
                value: '',
                valid: false,
                type: 'textinput',
                rules: {
                    confirmPass: "Password"
                }
            }
        }
    }
    render() {
        return (
            <View>
                <Input
                    placeholder="輸入用戶名"
                    type={this.state.form.email.type}
                    value={this.state.form.email.value}
                    onChangeText={(value) => {
                        () => alert('hey')
                    }}
                    autoCapitalize={"none"}
                    keyboardType={"email-address"}
                />
            </View>

        )
    }
}

export default LoginForm;

const styles = StyleSheet.create({

})