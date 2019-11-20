import * as React from 'react';
import {createUseStyles} from 'react-jss';

export interface InputProps {
  value: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
};

const useStyles = createUseStyles({
  input: {
    border: 'solid 1px #d8d8d8',
    padding: '12px 24px',
    borderRadius: 5,
    outline: 0,
    fontSize: 16,
  }
});

export const Input: React.FunctionComponent<InputProps> = (props) => {
  const classes = useStyles();
  const { value, onChange, className } = props;
  return (
    <input
      className={[classes.input, className].join(' ')}
      onChange={onChange}
      value={value}
    />
  );
};
