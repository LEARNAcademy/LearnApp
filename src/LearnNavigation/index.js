export * from './Screens';
export { pushAuthenticated } from './Authenticated';
export { pushUnauthenticated } from './Unauthenticated'

import registerScreens from './registerScreens';

// Register all screens on launch
registerScreens();
