import { AppBar, makeStyles, Toolbar, Button } from "@material-ui/core";
import React from "react";
import { NavLink, Link } from "react-router-dom";
const useStyle = makeStyles({
  header: {
    background: "blueviolet",
  },
  tabs: {
    color: "#fff",
    fontWeight: 500,
    textDecoration: "none",
    marginRight: 20,
    fontSize: 15,
  },
  btn: {
    display: "flex",
    justifyContent: "space-between",
  },
});
const Nav = () => {
  const styleChanger = useStyle();
  return (
    <AppBar className={styleChanger.header} position="static">
      <Toolbar className={styleChanger.btn}>
        <NavLink className={styleChanger.tabs} to="users">
          Users
        </NavLink>
        <Button
          variant="contained"
          color="primary"
          to="add"
          component={Link}
          className={styleChanger.tabs}
        >
          Add User
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
