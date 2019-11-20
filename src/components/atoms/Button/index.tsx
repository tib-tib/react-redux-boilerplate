import * as React from 'react';
import {createUseStyles} from 'react-jss';

export interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
};

const useStyles = createUseStyles({
  button: {
    display: 'inline-block',
    fontSize: 16,
    borderRadius: 5,
    padding: '12px 24px',
    background: '#0083FF',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    }
  }
});

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const classes = useStyles();
  const { text, onClick, disabled, className } = props;
  return (
    <button
      className={[classes.button, className].join(' ')}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
