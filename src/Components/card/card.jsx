import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import * as CartActions from "../../Redux/Action/CartAction";
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles(theme => ({
  card: {
    width: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const dispatch = useDispatch();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToCart = course => {
    dispatch(CartActions.addToCart(course));
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.item.title}
        subheader={"NULL"}
      />
      <CardMedia
        className={classes.media}
        image={props.item.imageUrl || " "}
        title={props.item.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.item.description}
        </Typography>
      </CardContent>
      {props.isOrdered ? (<div><span className='text-danger font-weight-bold' style={{paddingLeft: '20px'}}>Ordered</span> <CheckIcon/></div>) : (
        <div className="ml-3">
          <Button
            variant="contained"
            color="primary"
            onClick={() => addToCart(props.item)}
          >
            Cart
          </Button>
        </div>
      )}

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Người tạo: {props.item.owner !== undefined && props.item.owner}
          </Typography>
          <Typography paragraph>Mã khóa học: {props.item.id}</Typography>
          <Typography paragraph>Tên khóa học: {props.item.title}</Typography>
          <Typography paragraph>
            Mô tả: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Iure magnam dolore, autem, aut nostrum mollitia nemo repellat quod
            obcaecati aliquid laborum tenetur maiores doloremque quia non!
            Voluptas sunt dicta corporis.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
