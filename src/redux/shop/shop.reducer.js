import ShopActionTypes from './shop.types';

const { UPDATE_COLLECTIONS } = ShopActionTypes;

const INIT_STATE = {
  collections: null,
};

const shopReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload,
      }
    default:
      return state;
  }
}

export default shopReducer;