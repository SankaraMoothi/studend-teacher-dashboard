import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

function UsersView() {
  const param = useParams();
  const [user, setUsers] = useState({});
  useEffect(() => {
    loadUser();
  }, []);
  let loadUser = async () => {
    try {
      let users = await axios.get(
        `https://631d700ecc652771a4859a9c.mockapi.io/Student/${param.id}`
      );
      setUsers(users.data);
    } catch (error) {
      console.log("Somthing Wend Worring");
    }
  };
  return (
    <div className="col-lg-8 col-md-9 col-sm-12 m-auto">
      <Card sx={{ maxWidth: 435 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={user.Image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Name: {user.Name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Email: {user.Email}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              English: {user.English}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Tamil: {user.Tamil}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Maths: {user.Maths}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Science: {user.Science}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Social-Science: {user.SocialScience}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/" className="btn btn-primary">
            Back
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}

export default UsersView;
