import { v4 as uuidv4 } from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const newBand = {
        id: uuidv4(),
        name: action.name
      }
      return { ...state, bands: [...state.bands, newBand] }
    case 'DELETE_BAND':
      return {
        ...state,
        bands: state.bands.filter(band => band.id !== action.id)
      }
    default:
      return state;
  }
};
