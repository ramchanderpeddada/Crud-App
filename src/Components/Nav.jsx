import React from "react";
import { AppBar, Toolbar, Button, makeStyles } from "@material-ui/core";
import { NavLink, Link } from "react-router-dom";

const useStyle = makeStyles({
  header: {
    background: "blueviolet",
  },
  tabs: {
    color: "#fff",
    textDecoration: "none",
    marginRight: 20,
    fontSize:15,
  },
});
const Nav = () => {
  const classes = useStyle();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <NavLink className={classes.tabs} to="./">
          Home
        </NavLink>
        <NavLink className={classes.tabs} to="users">
          Users
        </NavLink>
        <Button
          variant="contained"
          color="primary"
          to="add"
          component={Link}
          className={classes.tabs}
        >
          Add user
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
