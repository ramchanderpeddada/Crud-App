import {
  TextField,
  Button,
  makeStyles,
  FormGroup,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Service/Link";

const useStyle = makeStyles({
  container: {
    width: "30%",
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
  const navigate = useNavigate();

  const valueChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    addUser(user)
    //   .then(() => {})
    //   .catch(() => {});
    if (user) {
      navigate("/users");
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <FormGroup className={styleChange.container}>
        <Typography variant="h5">Add User</Typography>
        <TextField
          required
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          value={name}
          onChange={(e) => valueChangeHandler(e)}
        />
        <TextField
          required
          id="outlined-basic"
          label="Username"
          variant="outlined"
          name="username"
          value={username}
          onChange={(e) => valueChangeHandler(e)}
        />
        <TextField
          required
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          value={email}
          onChange={(e) => valueChangeHandler(e)}
        />
        <TextField
          required
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          type="number"
          name="phone"
          value={phone}
          onChange={(e) => valueChangeHandler(e)}
        />
        <Button variant="contained" color="secondary" type="submit">
          Add User
        </Button>
      </FormGroup>
    </form>
  );
};

export default AddUser;
