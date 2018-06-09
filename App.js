import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from './src/components/Store/configureStore';
import Login from './src/components/screens/Login';
import Home from './src/components/screens/Home';
import AddPost from './src/components/screens/Admin/AddPost';

import { StyleSheet, Text, View } from 'react-native';

const store = configureStore()

Navigation.registerComponent(
  "Kidsmap.Login",
  () => Login,
  store,
  Provider
);

Navigation.registerComponent(
  "Kidsmap.Home",
  () => Home,
  store,
  Provider
)
Navigation.registerComponent(
  "Kidsmap.AddPost",
  () => AddPost,
  store,
  Provider
)

export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: "Kidsmap.Login",
    title: "Login",
    navigatiorStyle: {
      navBarHidden: true
    }
  }
})