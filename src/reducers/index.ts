import { AnyAction, combineReducers, Reducer } from 'redux';
import alarm from '../features/alarm/reducer';
import auth from '../features/auth/reducer';
import history from '../features/history/reducer';
import onboarding from '../features/onboarding/reducer';
import settings from '../features/settings/reducer';

const appReducer = combineReducers({
  auth,
  alarm,
  history,
  onboarding,
  settings,
});

type RootBaseState = ReturnType<typeof appReducer>;

const rootReducer: Reducer<RootBaseState, AnyAction> = (state, action) => {
  if (action.type === 'APP_RESET') {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export const resetStore = () => ({
  type: 'APP_RESET',
});

export default rootReducer;
