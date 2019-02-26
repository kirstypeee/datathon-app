// import { apiCall } from '../lib/fetch';
export const GET_CARERS = 'tiles/GET_CARERS';

export const getCarers = () => ({
  type: GET_CARERS,
  //payload: apiCall('/api/tiles'),
  payload: [{ id: 1, age: 18, employmentStatus: 'Unemployed' }, { id: 2, age: 20, employmentStatus: 'Unemployed' }]
});