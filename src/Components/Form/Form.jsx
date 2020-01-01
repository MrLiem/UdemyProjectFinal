import React,{useState} from "react";
import { useFormik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import {ADD_COURSE} from '../../Redux/Action/CourseActions'
import * as CourseActions from '../../Redux/Action/CourseActions'
import {useDispatch} from 'react-redux'

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: '90%'
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

const categories = [
    {
      value: 'Frontend',
     
    },
    {
      value: 'Backend',
     
    },
    {
      value: 'FullStack',
     
    },
    {
      value: 'Design',
      
    },
    {
        value: 'AI',
        
      },
      {
        value: 'Others',
        
      },
  ];

const CustomForm = props => {
  const classes = useStyles();
  const dispatch=useDispatch();
  const [category, setCategory] = useState('EUR');

  const handleChange = event => {
    setCategory(event.target.value);
  };
  const formik = useFormik({
    initialValues: {
    //   firstName: "",
    //   lastName: "",
    //   email: "",
      title: "",
      price: "",
    //   owner: "",
      imageUrl: "https://carolinadojo.com/wp-content/uploads/2017/04/default-image.jpg",
      videoIntro: "https://www.youtube.com/embed/zns830Yl1b0",
      description: "",
    },
    validate,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      // console.log(values);
      // console.log(category)
      const {title,price,imageUrl,videoIntro,description}= values;
      // dispatch(CourseActions.addCourse(title,price,imageUrl,videoIntro,description,category));
      props.addCourse(title,price,imageUrl,videoIntro,description,category);
      
    }
  });
  return (
    <form className={classes.root} onSubmit={formik.handleSubmit}>
      <TextField
        id="standard-basic"
        label="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
      />
      {formik.touched.title && formik.errors.title ? (
        <div>{formik.errors.title}</div>
      ) : null}
      <TextField
         id="standard-number"
        label="price"
        name="price"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.price}
      />
      {formik.touched.price && formik.errors.price ? (
        <div>{formik.errors.price}</div>
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
        label="videoIntro"
        name="videoIntro"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.videoIntro}
      />
      {formik.touched.videoIntro && formik.errors.videoIntro ? (
        <div>{formik.errors.videoIntro}</div>
      ) : null}
       <TextField
        id="standard-basic"
        label="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.description}
      />
      {formik.touched.description && formik.errors.description ? (
        <div>{formik.errors.description}</div>
      ) : null}
         {/* <TextField
        id="standard-basic"
        label="category"
        name="category"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.category}
      />
      {formik.touched.category && formik.errors.category ? (
        <div>{formik.errors.category}</div>
      ) : null} */}
       <TextField
          id="standard-select-currency"
          select
          label="category"
          value={category}
          onChange={handleChange}
          helperText="Please select your categories"
        >
          {categories.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      {/* <div><button type="submit">Submit</button></div> */}
      <div style={{display:'flex',justifyContent:'flex-end'}}>{props.children}</div>
    </form>
  );
};

export default CustomForm;
