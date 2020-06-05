import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from  './pages/Home';
import Points from  './pages/Points';
import Detail from  './pages/Detail';

const AppStak = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStak.Navigator 
                headerMode="none" 
                screenOptions= {{
                    cardStyle: {
                        backgroundColor: '#f0f0f5'
                    }
                }}
            >
                <AppStak.Screen name="Home" component={Home} />
                <AppStak.Screen name="Points" component={Points} />
                <AppStak.Screen name="Detail" component={Detail} />
            </AppStak.Navigator>
        </NavigationContainer>
    );
}

export default Routes;