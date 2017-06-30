import { StackNavigator } from 'react-navigation';

import HomeScreenContainer from '../../containers/HomeScreenContainer';

export default StackNavigator(
  {
    Home: { screen: HomeScreenContainer },
  },
  {
    initialRouteName: 'Home',
  },
);
