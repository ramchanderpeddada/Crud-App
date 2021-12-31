import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { deleteUser, getUser } from "../Service/Link";
import Dialogue from "./Dialogue";
const useStyle = makeStyles({
  table: {
    width: "90%",
    margin: "60px 0 0 50px",
  },
  tableHead: {
    "& > *": {
      backgroundColor: "lightblue",
    },
  },
});
const Users = () => {
  const [users, setUsers] = useState([]);
  const styleChanger = useStyle();

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    const confirmBox = window.confirm("Do you want to delete?");
    if (confirmBox === true) {
      await deleteUser(id);
      getAllUsers();
    }
  };

  const getAllUsers = async () => {
    const response = await getUser();
    setUsers(response.data);
  };

  return (
    <Table className={styleChanger.table}>
      <TableHead>
        <Typography variant="h4">Users</Typography>
        <TableRow className={styleChanger.tableHead}>
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
              <Typography
                style={{
                  textAlign: "right",
                }}
              >
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
              </Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Users;
