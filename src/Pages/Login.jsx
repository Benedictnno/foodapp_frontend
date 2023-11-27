import React, { useState } from "react";
import { LoginStyles } from "../Styles/LoginStyles";
import { loginUser, registerUser } from "../Slices/authSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Login() {
  const [values, setValues] = useState(initialState);
const dispatch = useDispatch()

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out fields");
      return;
    }

    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };
  return (
    <LoginStyles>
      <h1>Login to your account</h1>
      <form action="">
        {!values.isMember && (
          <input
            type="text"
            name="name"
            onChange={handleChange}
            required
            placeholder="Full name"
          />
        )}
        <input
          type="email"
          name="email"
          onChange={handleChange}
          required
          placeholder="Email"
        />
        <input
          type="password"
          required
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
      </form>
      <button type="button" className="Btn formBtn" onClick={onSubmit}>
        {!values.isMember ? "Create an account" : "Login"}
      </button>
      <p>
        Don't have an account?{" "}
        <span onClick={toggleMember} className="toggle">
          {values.isMember ? "Create an account" : "Login"}
        </span>
      </p>
    </LoginStyles>
  );
}

export default Login;
