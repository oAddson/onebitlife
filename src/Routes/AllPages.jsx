import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Start from "../Pages/Start";

const Stack = createNativeStackNavigator();

export default AllPages = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator 
        screeOptions={{
          headerShow: false,
        }}
      >

        <Stack.Screen 
          name="Start"
          component={Start}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};