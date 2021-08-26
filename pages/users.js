import { makeStyles } from '@material-ui/styles';
import { Container } from "@material-ui/core";


// views
import UserList from '../ui/views/UserList';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

function Users(){
  const classes = useStyles();

  return (
    <Container maxWidth={'sm'} className={classes.root}>
      <UserList />
    </Container>
  )
}
export default Users;