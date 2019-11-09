import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        What you'll learn
      </Typography>
      <div className="mt-2">
        <Typography component="p">
         ✔ You will learn the whole React Native building process, from your pc
          to your phone.
        </Typography>
      </div>
      <div className="mt-2">
        <Typography component="p">
        ✔ Learn how Redux works and apply it on React Native
        </Typography>
      </div>
      <div className="mt-2">
        <Typography component="p">
        ✔ Work with RNative and nosql databases like firebase.
        </Typography>
      </div>
    </Paper>
  );
}
