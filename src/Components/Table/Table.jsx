import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: '#fafafa',
    borderRadius: 0
    // overflowX: 'auto',
  },
  table: {
    width: '100%',
  },
});

function createData(info, data) {
  return { info, data};
}



export default function SimpleTable(props) {
  const classes = useStyles();

  const rows = [
    createData('UserId', props.currentUser.userId),
    createData('Name', props.currentUser.name),
    createData('Email', props.currentUser.email),
    createData('Phone', props.currentUser.phone),
    createData('UserType', props.currentUser.userType),
    createData('Password', props.currentUser.password),
    createData('ImageUrl', props.currentUser.imageUrl),
  ];

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Information</TableCell>
            <TableCell align="right">Detail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.info}>
              <TableCell component="th" scope="row">
                {row.info}
              </TableCell>
              <TableCell align="right">{row.data}</TableCell>
            </TableRow>
          ))}      
        </TableBody>
      </Table>
    </Paper>
  );
}