import * as React from 'react';
import { createUseStyles } from 'react-jss';

export interface AvatarProps {
  url: string;
}

const useStyles = createUseStyles({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: '25%',
  },
});

export const Avatar: React.FunctionComponent<AvatarProps> = props => {
  const classes = useStyles();
  const { url } = props;
  return <img className={classes.avatar} src={url} alt="avatar" />;
};
