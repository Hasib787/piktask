import { combineReducers } from "redux";
import { categoriesReducer } from "./categoriesReducer";
import { categoryReducer } from "./categoryReducer";
import { productReducer } from "./productReducer";
import { recentPhotoReducer } from "./recentPhotoReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  popularCategories: categoryReducer,
  recentPhotos: recentPhotoReducer,
  allCategories: categoriesReducer,
  productCategories: productReducer,
});

export default rootReducer;
