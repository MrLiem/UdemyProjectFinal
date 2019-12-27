import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Course from "../../models/Course";
import { useDispatch } from "react-redux";
import * as CartActions from "../../Redux/Action/CartAction";
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    minHeight: 300
  },
  media: {
    height: 150
  },
  myTitle: {
    fontSize: 15,
    fontWeight: 700,
    minHeight: 70
  },
  myDescription: {
    fontSize: 14
  },
  content: {
    minHeight: 140
  }
});

export default function CartItem(props) {
  const classes = useStyles();
  const {
    id,
    title,
    price,
    imageUrl,
    videoIntro,
    description,
    owner
  } = new Course(
    props.item.id,
    props.item.title,
    props.item.price,
    props.item.imageUrl,
    props.item.videoIntro,
    props.item.description,
    props.item.owner
  );

  let _shortenString = string => {
    if (string && string.length > 30) {
      return string.substr(0, 30) + "...";
    }
    return string;
  };

  const dispatch = useDispatch();
  // console.log(imageUrl)
  let goToCourseDetail = () => {
    props.history.push("/courseDetail_maKh/" + props.item.id);
  };

  const deleteCart = id => {
    dispatch(CartActions.deleteFromCart(id, price));
  };

  return (
    <div className="col-3 mt-4">
      <Card className={classes.card}>
        <CardActionArea onClick={goToCourseDetail}>
          <CardMedia
            className={classes.media}
            image={imageUrl}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.content}>
            <p className={classes.myTitle}>{title}</p>
            <p className={classes.myDescription}>
              {_shortenString(description)}
            </p>
            <div className='text-center font-weight-bold text-dark' style={{fontSize:'18px'}}>Current Price: $ {price}</div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={goToCourseDetail}
            style={{ paddingRight: 50 }}
          >
            View Detail
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => deleteCart(id, price)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
