import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CardCreater({ data, id, deleteStudent }) {
  let navigat = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => navigat(`/Users/View/${data.id}`)}>
        <CardMedia
          component="img"
          height="240"
          image={data.Image}
          alt="green iguana"
        />
        <CardContent className="text-center">
          <Typography gutterBottom variant="h5" component="div">
            Name: {data.Name}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            Email:{data.Email}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            English:{data.English}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            Tamil:{data.Tamil}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            Maths:{data.Maths}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            Science:{data.Science}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            SocialScience:{data.SocialScience}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Total:
            {+data.Science +
              +data.SocialScience +
              +data.Maths +
              +data.Tamil +
              +data.English}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => deleteStudent(id)} size="small">
          Delete
        </Button>
        <Button
          size="small"
          onClick={() => navigat(`/User/Edit/${data.id}`)}
          color="primary"
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardCreater;
