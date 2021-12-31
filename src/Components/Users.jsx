import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { getUser, deleteUser } from "../Service/Link";
const useStyle = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  tableHead: {
    "& > *": {
      backgroundColor: "lightblue",
    },
  },
});
const Users = () => {
  const [users, setUsers] = useState([]);
  const classes = useStyle();

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const getAllUsers = async () => {
    const response = await getUser();
    setUsers(response.data);
  };
  return (
    <Table className={classes.table}>
      <TableHead>
        <Typography>Users</Typography>
        <TableRow className={classes.tableHead}>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: 10 }}
                to={`/edit/${user.id}`}
                component={Link}
              >
                Edit
              </Button>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => deleteUserData(user.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Users;
