import { makeStyles } from "@material-ui/core";
import React from "react";
const useStyle = makeStyles({
  header: {
    textAlign:"center",
  },
});
const ErrorPage = () => {
  const styleChanger = useStyle();
  return (
    <div>
      <h1 className={styleChanger.header}>Error!!! Page not found</h1>
      <p className={styleChanger.header}>(404 NOT FOUND)</p>
    </div>
  );
};

export default ErrorPage;
