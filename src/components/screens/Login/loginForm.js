import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Input from '../../utils/forms/inputs'
import ValidationRules from '../../utils/forms/validationRule';
import LoadTab from '../Tabs';
class LoginForm extends Component {
    state = {
        type: 'Login',
        action: '登入',
        actionMode: '我不是使用者，現在註冊',
        hasErrors: false,
        form: {
            email: {
                value: '',
                valid: false, //沒警告
                type: 'textinput',
                rules: {
                    isRequired: true,
                    isEmail: true
                }
            },
            password: {
                value: '',
                valid: false,
                type: 'textinput',
                rules: {
                    isRequired: true,
                    minLength: 6
                }
            },
            comfirmPassword: {
                value: '',
                valid: false,
                type: 'textinput',
                rules: {
                    confirmPass: "password"
                }
            }
        }
    }

    updateInput = (name, value) => {
        this.setState({
            hasErrors: false
        })
        //當input有值改變時，改變後的值會被存在formCopy內
        let formCopy = this.state.form;
        //這是email/password/comfirmPassword到value
        formCopy[name].value = value
        let rules = formCopy[name].rules
        //傳參數(rules與value)給ValidationRules 這個function 去決定要回傳 true or false
        let valid = ValidationRules(value, rules, formCopy)
        console.log(valid) //確認表單是否有錯誤警告
        //把處理邏輯後的true與false放在state
        formCopy[name].valid = valid
        this.setState({
            //把複製的值放在真正該放的地方
            form: formCopy
        })
    }

    changeFormType = () => {
        const type = this.state.type;
        this.setState({
            type: type === 'Login' ? 'Register' : 'Login',
            action: type === 'Login' ? '註冊' : '登入',
            actionMode: type === 'Login' ? '我不要註冊，現在登入' : '我不是使用者，現在註冊'
        })
    }
    //當註冊時，會出現密碼認證
    comfirmPassword = () => (
        this.state.type != 'Login' ?
            <Input
                placeholder="驗證你的密碼"
                type={this.state.form.comfirmPassword.type}
                value={this.state.form.comfirmPassword.value}
                onChangeText={(value) => {
                    this.updateInput("comfirmPassword", value)
                }}
                secureTextEntry
                placeholderTextColor='#f2f2f2'
            />
            : null
    )

    formHasErrors = () => (
        this.state.hasErrors ?
            <View style={styles.errorContainer}>
                <Text style={styles.errorLabel}>有錯誤</Text>
            </View>
            : null
    )

    // 1.確認是否valid都會過 2. copy整個form並把Obj送到firebase
    submitUser = () => {
        let isFormValid = true;
        let formToSubmit = {};
        let formCopy = this.state.form;
        //把所有到input的key loop出來，並給isFormValid一個結果判斷要不要submit
        for (let key in formCopy) {
            if (this.state.type === "Login") {
                if (key !== 'comfirmPassword') {
                    isFormValid = isFormValid && formCopy[key].valid
                    //把我們輸入的值
                    formToSubmit[key] = formCopy[key].value
                }
            } else {
                //type === Register
                isFormValid = isFormValid && formCopy[key].valid
                formToSubmit[key] = formCopy[key].value
            }
        }
        if (isFormValid) {
            console.log(formToSubmit);
        } else {
            //  要show error message
            this.setState({
                hasErrors: true
            })
        }
    }

    render() {
        return (
            <View style={styles.formInputContainer}>
                <Input
                    placeholder="輸入用戶名"
                    type={this.state.form.email.type}
                    value={this.state.form.email.value}
                    //value是form這個state的value，email是form下面的state之一
                    onChangeText={(value) => {
                        this.updateInput("email", value)
                    }}
                    keyboardType={"email-address"}
                    placeholderTextColor='#f2f2f2'
                />
                <Input
                    placeholder="輸入密碼"
                    type={this.state.form.password.type}
                    value={this.state.form.password.value}
                    onChangeText={(value) => {
                        this.updateInput("password", value)
                    }}
                    autoCapitalize={"none"}
                    secureTextEntry
                    placeholderTextColor='#f2f2f2'
                />

                {this.comfirmPassword()}
                {this.formHasErrors()}
                <TouchableOpacity onPress={this.submitUser}>
                    <View
                        style={
                            this.props.platform === 'android'
                                ? styles.buttonStyleAndroid
                                : styles.buttonStyleIos
                        }
                    >
                        <Text style={styles.LoginButtonText}>{this.state.action}</Text>
                    </View>
                </TouchableOpacity>
                <View>
                    <Button
                        title={this.state.actionMode}
                        color="#ffe37f"
                        onPress={this.changeFormType}
                    />
                </View>
                <View>
                    <Button
                        title="I will do it later"
                        color="#ffe37f"
                        onPress={() => alert('訪客登入')}
                    />
                </View>
                <View>
                    <Text style={styles.TextStyle}>忘記用戶名或密碼？</Text>
                </View>
            </View>
        )
    }
}

export default LoginForm;

const styles = StyleSheet.create({
    formInputContainer: {
        marginLeft: 10,
        marginRight: 10,
        minHeight: 400
    },
    buttonStyleAndroid: {
        paddingBottom: 12,
        paddingTop: 12,
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: '#fff',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#00000080',
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 1.0,
        shadowRadius: 2,
    },
    buttonStyleIos: {
        paddingBottom: 12,
        paddingTop: 12,
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: '#fff',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#00000080',
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 1.0,
        shadowRadius: 2,
    },
    TextStyle: {
        fontSize: 9
    },
    LoginButtonText: {
        color: '#00a6e7',
        fontSize: 18,
        letterSpacing: 2
    },
    errorContainer: {
        marginTop: 10,
        marginBottom: 20
    },
    errorLabel: {
        color: 'red',
        //fontFamily: 'PingFangSC-Semibold'
        fontFamily: 'Roboto-Black'
    }
})