import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { addUser } from "./api";
import useForm from "./useForm";

const Signup = () => {
  const history = useHistory();
  const { data, handleChange, handleSubmit } = useForm({
    initialValues: { name: "", password: "" },
    onSubmit: async () => {
      await addUser(data.name, data.password);
      history.push("/login");
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={handleChange("name")}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={handleChange("password")}
      />
      <br />
      <input value="Signup" type="submit" />
      <h2>
        Have a user already? <Link to="/login">login</Link>
      </h2>
    </form>
  );
};

export default Signup;
