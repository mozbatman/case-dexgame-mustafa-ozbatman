import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router";
import * as yup from "yup";

import { addPlayer, deletePlayer, editPlayer, getPlayer } from "../../actions/accountAction";
import { category, status } from "../../utils";
import styles from "./EditPlayerForm.module.scss";

const validationSchema = yup.object({
  name: yup.string().required("Required"),
  surname: yup.string().required("Required"),
  age: yup.number().required("Required"),
  category: yup.number().required("Required"),
  status: yup.boolean().required("Required"),
});

const TextError = (props) => {
  return <div className={styles.error}>{props.children}</div>;
};

const EditPlayerForm = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const player = useSelector((state) => state.account.player);
  console.log(player);

  useEffect(() => {
    if (params.id) {
      dispatch(getPlayer(params.id));
    }
  }, []);

  const onSubmit = (player) => {
    if (params.id) {
      dispatch(editPlayer(player));
    } else {
      dispatch(addPlayer(player));
    }

    history.push("/");
  };

  const delPlayer = () => {
    const id = params.id;
    dispatch(deletePlayer(id));
    history.push("/");
  };

  return (
    <div className={styles.editPlayerForm}>
      <Formik
        initialValues={{
          name: player?.name || "",
          surname: player?.surname || "",
          age: player?.age || 18,
          category: player?.category || category[0].id,
          status: player?.status || false,
        }}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className={styles.formControl}>
            <h2 className={styles.header}>Add Player</h2>
            <div className={styles.areaGroup}>
              <div className={styles.fieldGroup}>
                <label htmlFor="name">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className={styles.field}
                />
                <ErrorMessage name="name" component={TextError} />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="surname">Surname</label>
                <Field
                  type="text"
                  id="surname"
                  name="surname"
                  className={styles.field}
                />
                <ErrorMessage name="surname" component={TextError} />
              </div>
            </div>
            <div className={styles.areaGroup}>
              <div className={styles.fieldGroup}>
                <label htmlFor="age">Age</label>
                <Field
                  type="number"
                  id="age"
                  name="age"
                  className={styles.field}
                />
                <ErrorMessage name="age" component={TextError} />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="category">Category</label>
                <Field as="select" name="category" className={styles.field}>
                  {category.map((cat) => (
                    <option value={cat.id}>{cat.name}</option>
                  ))}
                </Field>
                <ErrorMessage name="category" component={TextError} />
              </div>
            </div>
            <div className={styles.areaGroup}>
              <div className={styles.fieldGroup}>
                <label htmlFor="status">Status</label>
                <div className={styles.checkbox}>
                  <Field
                    type="checkbox"
                    name="status"
                    value="status"
                    checked={values.status}
                    className={styles.field}
                    onChange={() => setFieldValue("status", !values.status)}
                  />
                  {status[values.status]}
                </div>
                <ErrorMessage name="status" component={TextError} />
              </div>
            </div>
            {params.id ? (
              <button className={styles.deleteButton} onClick={() => delPlayer()}>
                DELETE
              </button>
            ) : null}
            <button type="submit" className={styles.addButton}>
              Add
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditPlayerForm;
