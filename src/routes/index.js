import {createNativeStackNavigator} from "@react-navigation/native-stack";

import BemVindo from "../pages/BemVindo";
import Login from "../pages/Login";
import Registrar from "../pages/Register";
import Principal from "../pages/Principal";
import Creditos from "../pages/Creditos";
import Games from "../pages/Games";
import Profile from "../pages/Profile";
import Carrinho from "../pages/Carrinho";

const Stack = createNativeStackNavigator();

const Rotas = () =>{
    return(
        <Stack.Navigator initialRouteName="BemVindo">

            <Stack.Screen
               name="BemVindo"
               component={BemVindo}
               options={{headerShown: false}}
               
            />
            <Stack.Screen
               name="Login"
               component={Login}
               options={{headerShown: false}}
            />
            <Stack.Screen
                name="Registrar"
                component={Registrar}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Principal"
                component={Principal}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Creditos"
                component={Creditos}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Games"
                component={Games}
                options={{headerShown: false}}
            />
            <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Carrinho"
            component={Carrinho}
            options={{headerShown: false}}
            />

        </Stack.Navigator>
    )
}

export default Rotas;