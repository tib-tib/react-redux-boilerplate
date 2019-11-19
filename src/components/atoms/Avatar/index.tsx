import * as React from 'react';

export interface AvatarProps {
  email: string;
};

export const Avatar: React.FunctionComponent<AvatarProps> = (props) => (
  <img
    src={`https://api.adorable.io/avatars/150/${props.email}.png`}
    alt={props.email}
  />
);
