import { combineReducers } from 'redux';
import carers from './carers';
import { connectRouter } from 'connected-react-router';

export default (history: any) => combineReducers({
  router: connectRouter(history),
  carers,
});
