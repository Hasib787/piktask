const initialValue = [];
export const totalPublishFileReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "TOTAL_IMAGE_EARNING":
            return action.payload;
        default:
            return state;
    }
}