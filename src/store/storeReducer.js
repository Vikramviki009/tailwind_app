export const storeReducer = (state, action) => {
  switch (action.type) {
    case "updateEmail": {
      return {
        ...state,
        email: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
