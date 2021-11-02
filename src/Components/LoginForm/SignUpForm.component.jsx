import LoginIcon from "@mui/icons-material/Login";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import axios from "axios";

const SignUpForm = () => {
  let history = useHistory();
  const [err, setError] = useState("");
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={async (values) => {
        let data = {
          username: values["username"],
          password: values["password"],
          confirmPassword: values["confirmPassword"],
        };
        var options = {
          url: `${process.env.REACT_APP_EXPRESS_SERVER}/api/create-user`,
          method: "POST",
          data: data,
        };
        axios
          .request(options)
          .then((res) => {
            if(res.data.status==409)
              setError(res.data.msg)
            else{
              localStorage.setItem("username",values["username"])
              history.push("/")
            }
          })
          .catch((err) => console.log(err));
      }}
    >
      <Form className="form-inputs">
      {err ? <span>{err}</span>: null}
        <span>Username</span>
        <Field
          type="text"
          id="username"
          name="username"
          placeholder="Enter Username"
          autoComplete="off"
        />
        <span>Password</span>
        <Field
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
        />
        <span>Confirm Password</span>
        <Field
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Enter Password Again"
        />
        <button>
          <p>Sign Up</p>
          <LoginIcon />
        </button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
