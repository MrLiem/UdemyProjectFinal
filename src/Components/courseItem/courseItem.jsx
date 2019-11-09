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
    maxWidth: 345,
    minHeight:300

  },
  media: {
    height: 140
  },

});



export default function CourseItem(props) {
  const classes = useStyles();
  const {moTa,hinhAnh,tenKhoaHoc}=props.item;
    
  let _shortenString=(string)=>{
    if(string && string.length>15){
      return string.substr(0,15)+'...'
    }
    return string;
  }
  let goToCourseDetail=()=>{
    props.history.push('/courseDetail/'+props.item.maKhoaHoc);
   // console.log("das",props.history);
  }

  return (
    <div className="col-3 mt-2">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={hinhAnh}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="h2">
              {tenKhoaHoc}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {_shortenString(moTa)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary" onClick={goToCourseDetail}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
