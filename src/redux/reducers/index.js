import { combineReducers } from "redux";
import { categoriesReducer } from "./categoriesReducer";
import { categoryItemsReducer } from "./categoryItemsReducer";
import { categoryReducer } from "./categoryReducer";
import { recentPhotoReducer } from "./recentPhotoReducer";
import { totalPublishFileReducer } from "./totalPublishFileReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  popularCategories: categoryReducer,
  recentPhotos: recentPhotoReducer,
  allCategories: categoriesReducer,
  totalPublishFile: totalPublishFileReducer,
  categoryBasedItems: categoryItemsReducer,
});

export default rootReducer;
