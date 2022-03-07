import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import {SetURL} from './RegisterUrl';
import {ListUrls} from './List';

const Routes = createAppContainer(
  createSwitchNavigator({
    SetURL,
    ListUrls,
  })
);

export default Routes;