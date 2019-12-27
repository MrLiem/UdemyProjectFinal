import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});

const MyButton = props => {
  return (
    <Button variant="contained" color="secondary" onClick={props.onClick}>
      {props.text}
    </Button>
  );
};

export default MyButton;
