const initialValue = [];
export const productReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "PRODUCT_CATEGORIES":
            return action.payload;
        default:
            return state;
    }
}