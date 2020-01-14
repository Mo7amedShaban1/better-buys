import types from "./shop.types";

const INITIAL_STATE = {
   collections: []
};

const shopReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case types.UPDATE_COLLECTIONS:
         return {
            ...state,
            collections: action.payload
         };
      default:
         return state;
   }
};

export default shopReducer;
