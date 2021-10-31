import LoginIcon from "@mui/icons-material/Login";
import axios from "axios";

import { Formik, Field, Form } from "formik";

const LoginForm = () => {
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
          url: `${process.env.REACT_APP_TS_SERVER}/api/login-user`,
          method: "POST",
          data: data,
        };
        axios
          .request(options)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
      }}
    >
      <Form className="form-inputs">
        <span>Username</span>
        <Field type="text" name="username" placeholder="Enter Username" />
        <span>Password</span>
        <Field type="password" name="password" placeholder="Enter Password" />
        <button>
          <p>Login</p>
          <LoginIcon />
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
