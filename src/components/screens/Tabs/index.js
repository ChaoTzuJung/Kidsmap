import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


const LoadTabs = () => {
    Promise.all([
        Icon.getImageSource('home', 20, 'blue'),
        Icon.getImageSource('user', 20, 'red')
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "Kidsmap.Home",
                    label: "Home",
                    title: "Home",
                    icon: sources[0]
                },
                {
                    screen: "Kidsmap.AddPost",
                    label: "User",
                    title: "User",
                    icon: sources[1]
                },
            ]
        })
    })
}

export default LoadTabs;