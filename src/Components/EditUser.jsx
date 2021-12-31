import {
  TextField,
  Button,
  makeStyles,
  FormGroup,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUser, editUser } from "../Service/Link";
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
const EditUser = () => {
  const [user, setUser] = useState(finalValue);
  const { name, username, email, phone } = user;
  const styleChange = useStyle();
  const { id } = useParams();
  const navigate = useNavigate();

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
    alert("Updated successfully");
    if (user) {
      navigate("/users");
    }
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
        name="phone"
        value={phone}
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
