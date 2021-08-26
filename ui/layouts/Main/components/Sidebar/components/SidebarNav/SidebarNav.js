/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {List, ListItem, colors, ListItemText, ListItemIcon} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  }
}));


const SidebarNav = props => {
  const { pages, className, ...rest } = props;
  const classes = useStyles();

  return (
    <List
      {...rest}
      className={clsx(classes.root, className)}>
      {pages.map((page) => (
        <Link href={page.href} passHref key={page.title}>
          <ListItem button component='a' className={classes.item}>
            <ListItemIcon className={classes.icon}>{page.icon}</ListItemIcon>
            <ListItemText>{page.title}</ListItemText>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};


export default SidebarNav;
