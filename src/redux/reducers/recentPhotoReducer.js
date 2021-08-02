const initialValue = [];
export const recentPhotoReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "RECENT_PHOTOS":
            return action.payload;
        default:
            return state;
    }
}