import { combineReducers } from "redux";
import { categoriesReducer } from "./categoriesReducer";
import { categoryReducer } from "./categoryReducer";
import { recentPhotoReducer } from "./recentPhotoReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  popularCategories: categoryReducer,
  recentPhotos: recentPhotoReducer,
  allCategories: categoriesReducer,
});

export default rootReducer;
