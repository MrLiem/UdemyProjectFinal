import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    width: 700
  },
  myVideo: {
    paddingLeft: 200,
    paddingTop: 50,
    backgroundColor: "#fafafa"
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  // console.log(props.isMyCourse);
  return (
    <div className={classes.myVideo}>
      {props.isOrdered || props.isMyCourse? (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="iframe"
              alt="Video Education"
              height="350"
              src={props.videoUrl}
              title="Video Education"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ) : (
        <div style={{height:'250px', backgroundColor:'#fafafa',fontSize:'20px'}}>
          <div>Bạn cần đăng ký khóa học để có thể xem được nội dung này!!!</div>
        </div>
      )}
    </div>
  );
}
