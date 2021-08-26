import { useSelector, useDispatch } from 'react-redux';
import { getUser, setUser } from '../state/slices/userSlice';
import React, { useEffect } from 'react';
import {Container, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


// views
import Dashboard from '../ui/views/Dashboard';



const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  }
}));

export default function LandingPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(getUser);


  useEffect( () => {
    setTimeout(() => {
      dispatch(
        setUser({
          id: 8,
          username: 'Robert'
        })
      )
    }, 2000);
  })

  return (
    <Container maxWidth={'sm'} className={classes.root}>
      <Typography variant={'h1'}>{`Hello, Welcome  ${user.username} userId:${user.id}`}</Typography>
      <Dashboard />
    </Container>
  )
};



// export function getServerSideProps(){
//   return {
//     props: {
//
//     }
//   }
// }
