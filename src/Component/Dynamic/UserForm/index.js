import React from "react";
import TextField from "@mui/material/TextField";
import { Button, Box } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import * as yup from "yup";

function UserForm() {
  const navigate = useNavigate();
  const formikValidation = yup.object({
    Name: yup
      .string()
      .min(5, "Name Must Contain Min 5 characters")
      .required("Please Fill The Name"),
    Email: yup
      .string()
      .min(7, "Email Must Contain Min 7 characters")
      .required("Please Fill The Email"),
    Image: yup
      .string()
      .min(7, "Image Must Contain Min 7 characters")
      .required("Please Fill The Image"),
    English: yup.number().required("Please Fill The English Mark"),
    Tamil: yup.number().required("Please Fill The Tamil Mark"),
    Maths: yup.number().required("Please Fill The Maths Mark"),
    Science: yup.number().required("Please Fill The Science Mark"),
    SocialScience: yup.number().required("Please Fill The SocialScience Mark"),
  });
  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Image: "",
      English: "",
      Tamil: "",
      Maths: "",
      Science: "",
      SocialScience: "",
    },
    validationSchema: formikValidation,
    onSubmit: async (values) => {
      let user = await axios.post(
        "https://631d700ecc652771a4859a9c.mockapi.io/Student",
        values
      );
      navigate("/");
    },
  });
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="col-lg-6 col-md-8 col-sm-12 m-auto">
          <form className="d-flex flex-column">
            <TextField
              id="outlined-basic"
              label="Name"
              value={formik.values.Name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="Name"
              variant="outlined"
              error={formik.touched.Name && formik.errors.Name}
              helperText={
                formik.touched.Name && formik.errors.Name
                  ? formik.errors.Name
                  : null
              }
            />

            <TextField
              id="outlined-basic"
              label="Email"
              value={formik.values.Email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="Email"
              variant="outlined"
              error={formik.touched.Email && formik.errors.Email}
              helperText={
                formik.touched.Email && formik.errors.Email
                  ? formik.errors.Email
                  : null
              }
            />

            <TextField
              id="outlined-basic"
              label="Image"
              value={formik.values.Image}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="Image"
              variant="outlined"
              error={formik.touched.Image && formik.errors.Image}
              helperText={
                formik.touched.Image && formik.errors.Image
                  ? formik.errors.Image
                  : null
              }
            />
            <TextField
              id="outlined-basic"
              label="English"
              value={formik.values.English}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="English"
              variant="outlined"
              error={formik.touched.English && formik.errors.English}
              helperText={
                formik.touched.English && formik.errors.English
                  ? formik.errors.English
                  : null
              }
            />
            <TextField
              id="standard-basic"
              label="Tamil"
              value={formik.values.Tamil}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="Tamil"
              variant="outlined"
              error={formik.touched.Tamil && formik.errors.Tamil}
              helperText={
                formik.touched.Tamil && formik.errors.Tamil
                  ? formik.errors.Tamil
                  : null
              }
            />
            <TextField
              id="outlined-basic"
              label="Maths"
              value={formik.values.Maths}
              onChange={formik.handleChange}
              name="Maths"
              onBlur={formik.handleBlur}
              variant="outlined"
              error={formik.touched.Maths && formik.errors.Maths}
              helperText={
                formik.touched.Maths && formik.errors.Maths
                  ? formik.errors.Maths
                  : null
              }
            />
            <TextField
              id="outlined-basic"
              label="Science"
              value={formik.values.Science}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="Science"
              variant="outlined"
              error={formik.touched.Science && formik.errors.Science}
              helperText={
                formik.touched.Science && formik.errors.Science
                  ? formik.errors.Science
                  : null
              }
            />
            <TextField
              id="outlined-basic"
              label="SocialScience"
              value={formik.values.SocialScience}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="SocialScience"
              variant="outlined"
              error={
                formik.touched.SocialScience && formik.errors.SocialScience
              }
              helperText={
                formik.touched.SocialScience && formik.errors.SocialScience
                  ? formik.errors.SocialScience
                  : null
              }
            />
            <Button
              variant="contained"
              disabled={!formik.isValid}
              onClick={formik.handleSubmit}
            >
              Submit
            </Button>

            <Link to="/" className="btn btn-primary mt-2">
              Back
            </Link>
          </form>
        </div>
      </Box>
    </>
  );
}

export default UserForm;
