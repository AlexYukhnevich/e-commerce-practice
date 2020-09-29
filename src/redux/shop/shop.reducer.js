import SHOP_DATA from './shop.data';

const INIT_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
}

export default shopReducer;