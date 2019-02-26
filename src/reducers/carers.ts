import { GET_CARERS } from '../actions/carers';
import { ICarerSummary } from '../types';
import { fulfilled, failed, pending } from '../lib/promiseMiddlewareTypes';

function allTiles(state = [], action: any): any {
  switch (action.type) {
    case fulfilled(GET_CARERS):
      return action.payload as ICarerSummary[];
    case pending(GET_CARERS):
      return [];
    case failed(GET_CARERS):
      // TODO Error handling ...
      console.log('Could not load Tiles. Details:' + JSON.stringify(action.payload, null, 2));
      return [];
    default:
      return state;
  }
}

export default allTiles;
