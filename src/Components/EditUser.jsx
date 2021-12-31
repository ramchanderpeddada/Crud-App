import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  getUser, editUser } from "../Service/Link";

const useStyle = makeStyles({
  container: {
    width: "35%",
    margin: "10% 0 0 35%",
    "& > *": {
      marginTop: 20,
    },
  },
});
const finalValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};
const EditUser = () => {
  const [user, setUser] = useState(finalValue);
  const { name, username, email, phone } = user;
  const { id } = useParams();
  const styleChange = useStyle();

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const response = await getUser(id);
    setUser(response.data);
  };

  const valueChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = async () => {
    await editUser(id, user);
    alert("Updated! successfully")
  };

  return (
    <FormGroup className={styleChange.container}>
      <Typography variant="h5">Update User</Typography>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name="name"
        value={name}
        onChange={(e) => valueChangeHandler(e)}
      />
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        name="username"
        value={username}
        onChange={(e) => valueChangeHandler(e)}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        name="email"
        value={email}
        onChange={(e) => valueChangeHandler(e)}
      />
      <TextField
        id="outlined-basic"
        label="Phone"
        variant="outlined"
        type="number"
        value={phone}
        name="phone"
        onChange={(e) => valueChangeHandler(e)}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={() => onSubmitHandler()}
      >
        Update
      </Button>
    </FormGroup>
  );
};

export default EditUser;
