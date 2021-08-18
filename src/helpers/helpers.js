import axios from "axios";

export const getCategoryNames = () => {
  let categoryItems = [];

  axios
    .get(`${process.env.REACT_APP_API_URL}/categories`)
    .then(({ data }) => {
      if (data?.status) {
        const sortedData = data?.categories.sort((a, b) => a.id - b.id);
        categoryItems = sortedData;
      }
    })
    .catch((error) => console.log("Categories loading error: ", error));

  return categoryItems;
};
