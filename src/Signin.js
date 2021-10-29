import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import AuthContext from "./AuthContext";
import useForm from "./useForm";

const Signin = () => {
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const { data, handleChange, handleSubmit } = useForm({
    initialValues: { name: "", password: "" },
    onSubmit: async () => {
      await authContext.login(data.name, data.password);
      history.push("/");
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
      <input value="Sign in" type="submit" />
      <br />
      <h2>
        Don't have a user? <Link to="register">register</Link> for free
      </h2>
    </form>
  );
};

export default Signin;
