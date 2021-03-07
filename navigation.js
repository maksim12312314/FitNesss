
import React from "react";
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import Main from "./Main";
import Vest from './component/screen'
import StepPages from "./component/threeComponent"

const { Navigator, Screen } = createNativeStackNavigator();

const AppStackNavigator = () => {

   
    return (
        <Navigator
            initialRouteName="Main"
            backBehavior="history"
            mode='modal'
            headerMode='screen'
            defaultNavigationOptions={{
                tabBarVisible: true,
                headerHideShadow: false,
            }}>
            <Screen 
                name="Vest"
                component={Vest}
                />
            <Screen
                name="StagePages" 
                component={StepPages}
            />

        </Navigator>
    );
};

export default AppStackNavigator;

