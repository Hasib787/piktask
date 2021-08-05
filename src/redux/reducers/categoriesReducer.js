const initialValue = {
  categories: [],
};
export const categoriesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "CATEGORIES":
      return action.payload;
    default:
      return state;
  }
};
