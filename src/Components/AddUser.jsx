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
import React, { useState } from "react";
import { addUser } from "../Service/Link";

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
const AddUser = () => {
  const [user, setUser] = useState(finalValue);
  const { name, username, email, phone } = user;
  const styleChange = useStyle();

  const valueChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = async () => {
    await addUser(user);
    alert("Added succesfully");
  };
  return (
    <FormGroup className={styleChange.container}>
      <Typography variant="h5">Add User</Typography>
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
        Add User
      </Button>
    </FormGroup>
  );
};

export default AddUser;
