import { combineReducers } from 'redux';
import { categoryReducer } from './categoryReducer';
import { recentPhotoReducer } from './recentPhotoReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    popularCategories: categoryReducer,
    recentPhotos: recentPhotoReducer,
});

export default rootReducer;