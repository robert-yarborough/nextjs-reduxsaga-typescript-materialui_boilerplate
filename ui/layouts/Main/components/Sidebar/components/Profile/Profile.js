import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

const Profile = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const user = {
    name: 'Robert Yarborough',
    avatar: 'RY',
    bio: 'Software Engineer'
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}>
      <Avatar
        alt={user.avatar}
        className={classes.avatar}
        // component={() => <Link href='/settings' passHref/>}TODO: add clickable link || dynamic route
        src={user.avatar}
        to="/settings"/>
      <Typography
        className={classes.name}
        variant="h4">
        {user.name}
      </Typography>
      <Typography variant="body2">{user.bio}</Typography>
    </div>
  );
};


export default Profile;
