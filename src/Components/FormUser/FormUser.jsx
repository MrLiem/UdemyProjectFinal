import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import {useDispatch} from 'react-redux'
import * as UserActions from '../../Redux/Action/UserAction'

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%"
    }
  }
}));

const validate = values => {
  const errors = {};
  // if (!values.title) {
  //   errors.title = "Required";
  // } else if (values.title.length > 15) {
  //   errors.title = "Must be 15 characters or less";
  // }

  // if (!values.imageUrl) {
  //   errors.imageUrl = "Required";
  // } else if (values.imageUrl.length > 20) {
  //   errors.imageUrl = "Must be 20 characters or less";
  // }
  // if (!values.description) {
  //   errors.description = "Required";
  // } else if (values.description.length > 20) {
  //   errors.description = "Must be 20 characters or less";
  // }

  //   if (!values.email) {
  //     errors.email = "Required";
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //     errors.email = "Invalid email address";
  //   }

  return errors;
};
export default function FormUser(props) {
  const classes = useStyles();
  const { userId, name, imageUrl, phone } = props.currentUser;
  const id=props.id;
  const dispatch=useDispatch();
  const formik = useFormik({
    initialValues: {
      //   firstName: "",
      //   lastName: "",
      //   email: "",
      userId: userId || '',
      name: name  || '',
      //   owner: "",
      imageUrl: imageUrl  || '',
      phone: phone  || ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      console.log(id);
      // alert(values);
      // console.log(values);
      const {userId,name,imageUrl,phone}=values
      dispatch(UserActions.editUser(id,name,imageUrl,phone))
    }
  });
  return (
    <form
      className={classes.root}
      onSubmit={formik.handleSubmit}
      style={{ marginRight: "10px" }}
    >
      <div>
        <TextField
          id="standard-read-only-input"
          label="userId"
          name="userId"
          type="text"
          InputProps={{
            readOnly: true,
          }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userId}
        />
        {formik.touched.userId && formik.errors.userId ? (
          <div>{formik.errors.userId}</div>
        ) : null}
        <TextField
          id="standard-basic"
          label="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
        <TextField
          id="standard-basic"
          label="imageUrl"
          name="imageUrl"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.imageUrl}
        />
        {formik.touched.imageUrl && formik.errors.imageUrl ? (
          <div>{formik.errors.imageUrl}</div>
        ) : null}
        <TextField
          id="standard-basic"
          label="phone"
          name="phone"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div>{formik.errors.phone}</div>
        ) : null}
      </div>
      <Button type="submit" color="primary">
        Edit your profile
      </Button>
    </form>
  );
}
