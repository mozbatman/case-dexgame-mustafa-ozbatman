import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import styles from "./Login.module.scss";
import { login } from "../../actions/accountAction";

const validationSchema = yup.object({
  username: yup.string().required("Required"),
  password: yup.string().required("Required"),
});

const initialValues = {
  username: "",
  password: "",
};

const TextError = (props) => {
  return <div className={styles.error}>{props.children}</div>;
};

const Login = () => {
  const dispatch = useDispatch();
  const loginFail = useSelector(state => state.account.error);

  const onSubmit = (credentials) => {
    dispatch(login(credentials));
  };

  return (
    <div className={styles.loginContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className={styles.formControl}>
          <h2 className={styles.loginText}>LOGIN</h2>
          <label htmlFor="username">Username</label>
          <Field
            type="text"
            id="text"
            name="username"
            className={styles.field}
          />
          <ErrorMessage name="username" component={TextError} />
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            id="password"
            name="password"
            className={styles.field}
          />
          <ErrorMessage name="password" component={TextError} />

          <div className={styles.error}>{loginFail && loginFail}</div>
          <button type="submit" className={styles.loginButton}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
