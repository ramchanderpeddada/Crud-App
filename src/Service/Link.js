import axios from "axios";

const apiLink = "http://localhost:5000/users";

export const getUser = async (id) => {
  id = id || "";
  return await axios.get(`${apiLink}/${id}`);
};

export const addUser = async (user) => {
  try {
    const res =await axios.post(`${apiLink}`, user);
    alert("Added successfully");
    return res.data
  } catch (error) {
    
    alert("error!!");
  }
};

export const deleteUser = async (id) => {
  return await axios.delete(`${apiLink}/${id}`);
};

export const editUser = async (id, user) => {
  return await axios.put(`${apiLink}/${id}`, user);
};
