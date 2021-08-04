const initialValue = {
  totalImages: "",
  categories: [],
};
export const categoryItemsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "CATEGORY_BASED_ITEMS":
      return action.payload;
    default:
      return state;
  }
};
