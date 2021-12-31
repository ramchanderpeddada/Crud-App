import { makeStyles } from "@material-ui/core";
import React from "react";
const useStyle = makeStyles({
  header: {
    textAlign:"center",
  },
});
const Home = () => {
  const styleChanger = useStyle();
  return (
    <div>
      <h1 className={styleChanger.header}>Home page</h1>
    </div>
  );
};

export default Home;
