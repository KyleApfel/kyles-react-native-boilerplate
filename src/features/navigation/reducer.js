import NavigationContainer from './NavigationContainer';

export default (state, action) => NavigationContainer.router.getStateForAction(action, state);
