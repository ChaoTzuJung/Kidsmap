import { Navigation } from 'react-native-navigation';
import Login from './src/Login';
import Home from './src/Home';
import AddPost from './src/Admin/AddPost';

import { StyleSheet, Text, View } from 'react-native';

Navigation.registerComponent("Kidsmap.Login", () => Login)
Navigation.registerComponent("Kidsmap.Home", () => Home)
Navigation.registerComponent("Kidsmap.Post", () => Post)

export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: "Kidsmap.Login",
    title: "Login",
    navigatiorStyle: {
      navBarHidden: true
    }
  }
})