const initialValue = [];
export const categoryReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "POPULAR_CATEGORIES":
            return action.payload;
        default:
            return state;
    }
}