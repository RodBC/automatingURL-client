import { createStackNavigator } from '@react-navigation/stack';

import {SetURL} from './RegisterUrl';
import {ListUrls} from './List';

const Stack = createStackNavigator();

export const Routes = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="cadastro" component={SetURL} />
      <Stack.Screen name="escolha" component={ListUrls} />
    </Stack.Navigator>
  )
}

  // useEffect(() => {
  //   AsyncStorage.getItem('user').then(user => {
  //     if (user) {
  //       navigation.navigate('ListUrls');
  //     }
  //   })
  // }, []);