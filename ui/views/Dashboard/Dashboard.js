import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';



import Budget from './components/Budget/Budget';
import TotalProfit from './components/TotalProfit/TotalProfit';
import TasksProgress from './components/TasksProgress/TasksProgress';



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}>
          <Budget />
        </Grid>

        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}>
          <TasksProgress />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}>
          <TotalProfit />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;