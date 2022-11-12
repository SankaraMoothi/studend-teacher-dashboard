import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Button, Box } from "@mui/material";
import { useFormik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UserEdit() {
  const param = useParams();
  const navigate = useNavigate();
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
    validate: (values) => {
      let error = {};
      if (values.Name === "") {
        error.Name = "Please Enter Name";
      }
      if (values.Name.length < 4) {
        error.Name = "Name length Should Greater 5 ";
      }
      if (values.Email === "") {
        error.Email = "Please Enter Email";
      }

      return error;
    },
    onSubmit: async (value) => {
      await axios.put(
        `https://631d700ecc652771a4859a9c.mockapi.io/Student/${param.id}`,
        value
      );
      navigate("/");
    },
  });
  useEffect(() => {
    loadUser();
  }, []);
  let loadUser = async () => {
    try {
      let users = await axios.get(
        `https://631d700ecc652771a4859a9c.mockapi.io/Student/${param.id}`
      );
      formik.setValues({
        Name: users.data.Name,
        Email: users.data.Email,
        Image: users.data.Image,
        English: users.data.English,
        Tamil: users.data.Tamil,
        Maths: users.data.Maths,
        Science: users.data.Science,
        SocialScience: users.data.SocialScience,
      });
    } catch (error) {
      console.log("Somthing Wend Worring");
    }
  };

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
              name="Name"
              variant="outlined"
            />
            <span style={{ color: "red" }}>{formik.errors.Name}</span>
            <TextField
              id="outlined-basic"
              label="Email"
              value={formik.values.Email}
              onChange={formik.handleChange}
              name="Email"
              variant="outlined"
            />
            <span style={{ color: "red" }}>{formik.errors.Email}</span>
            <TextField
              id="outlined-basic"
              label="Image"
              value={formik.values.Image}
              onChange={formik.handleChange}
              name="Image"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="English"
              value={formik.values.English}
              onChange={formik.handleChange}
              name="English"
              variant="outlined"
            />
            <TextField
              id="standard-basic"
              label="Tamil"
              value={formik.values.Tamil}
              onChange={formik.handleChange}
              name="Tamil"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Maths"
              value={formik.values.Maths}
              onChange={formik.handleChange}
              name="Maths"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Science"
              value={formik.values.Science}
              onChange={formik.handleChange}
              name="Science"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="SocialScience"
              value={formik.values.SocialScience}
              onChange={formik.handleChange}
              name="SocialScience"
              variant="outlined"
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

export default UserEdit;
