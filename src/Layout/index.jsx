import React, { useEffect } from "react";

const Layout = (props) => {
  const {
    title,
    description = "",
    keywords = "",
    author = "",
    children,
    ...others
  } = props;

  useEffect(() => {
    window.scrollTo(0, 0);

    // Before passing any props for the Layout component please check the relavant meta tags are available in the index.html file that is located in the public folder.
    title && (document.title = title);
    author && (document.querySelector('meta[name="author"]').content = author);
    description &&
      (document.querySelector('meta[name="description"]').content =
        description);
    keywords &&
      (document.querySelector('meta[name="keywords"]').content = keywords);
  }, []);

  return <main {...others}>{children}</main>;
};

export default Layout;