export const getYear = (date) => {
  return date;
};

export const dateFormat = (time) => {
  // switch(time) {
  //     case time!:
  //     break;
  //     default:
  // }

  return time;
};

export const getBaseURL = () => {
  const clientURL = localStorage.getItem("imageBaseURL");
  const client = JSON.parse(clientURL);
  return {
    bucket_base_url: client.bucket_base_url,
    profiles: client.profiles,
    images: client.images,
    categories: client.categories,
    blog_images: client.blog_images,
  };
};

export const getWords = (amount, str) => {
  const strArray = str.split(" ");
  const newDescription = strArray.splice(0, amount).join(" ");

  return newDescription;
};
