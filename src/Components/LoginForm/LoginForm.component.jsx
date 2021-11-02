import LoginIcon from "@mui/icons-material/Login";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { Formik, Field, Form } from "formik";
import { useState } from "react";

const LoginForm = () => {
  let history = useHistory();
  const [err, setError] = useState("");
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={async (values) => {
        let data = {
          username: values["username"],
          password: values["password"],
        };
        var options = {
          url: `${process.env.REACT_APP_EXPRESS_SERVER}/api/login-user`,
          method: "POST",
          data: data,
        };
        axios
          .request(options)
          .then((res) => {
            console.log(res);
            if (res.data.status == 404) setError(res.data.msg);
            else {
              localStorage.setItem("username", values["username"]);
              history.push("/");
            }
          })
          .catch((err) => console.log(err));
      }}
    >
      <Form className="form-inputs">
        {err ? <span>{err}</span> : null}
        <span>Username</span>
        <Field
          type="text"
          name="username"
          placeholder="Enter Username"
          autoComplete="off"
        />
        <span>Password</span>
        <Field type="password" name="password" placeholder="Enter Password" />
        <button type="submit">
          <p>Login</p>
          <LoginIcon />
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
