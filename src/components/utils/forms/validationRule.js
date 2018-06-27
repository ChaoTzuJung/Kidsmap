const validation = (value, rules, form) => {
    let valid = true;
    //console.log(value)
    //console.log(rules)
    for (let rule in rules) { //參數2
        //console.log(rule)
        //console.log(form) //告訴我們目前表單有幾項輸入框
        switch (rule) {
            case "isRequired":
                valid = valid && validationRequired(value) //參數1
                break
            case "isEmail":
                valid = valid && validationEmail(value) //參數1
                break
            case "minLength":
                valid = valid && validationMinLength(value, rules[rule]) //參數1 與 (rules這個正列).rule
                break
            case "confirmPass":
                valid = valid && validationComfirmPass(value, form[rules.confirmPass].value) //參數1 form是key
                break
            default:
                valid = true;
        }
    }
    return valid;
}

//專門寫邏輯確認輸入框有無文字，以及要不要顯示警告
const validationRequired = value => {
    if (value !== '') {
        return true;
    }
    return false;
}

//專門寫邏輯確認輸入框是否是email，以及要不要顯示警告
const validationEmail = email => {
    const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expression.test(String(email).toLowerCase())
}

const validationMinLength = (value, ruleValue) => {
    if (value.length >= ruleValue) {
        return true
    }
    return false;
}

//檢查confirmPass是否等於pass的值
const validationComfirmPass = (confirmPass, pass) => { //pass是你輸入在ComfirmPass輸入框得值
    console.log(pass)
    return confirmPass === pass
}

export default validation;