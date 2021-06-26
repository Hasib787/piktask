import axios from "axios";
// import { useState } from 'react';

const ACCESS_KEY = "nw4TpvwFYuQYe5aw0eQ-oJxJoMy6px8yttv4vMWHQRM";

export const getPhotos = async (query, count) => {
  const { results } = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&per_page=${count}&client_id=${ACCESS_KEY}`
  );
  // console.log(results);
  return results;
};
