import LoginIcon from "@mui/icons-material/Login";

import { Formik, Field, Form } from "formik";
import axios from "axios";

const SignUpForm = () => {
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
          url: `${process.env.REACT_APP_TS_SERVER}/api/create-user`,
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
        <Field
          type="text"
          id="username"
          name="username"
          placeholder="Enter Username"
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
