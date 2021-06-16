import React from 'react';
import { IconButton, useTheme } from '@material-ui/core';

const defaultOnclick = () => {};

export interface MIconButtonProps {
    className?: string;
    onClick: typeof defaultOnclick;
    children: React.ReactNode,
    border?: 'sm' | 'md' | 'lg'
}

export const MIconButton:React.FC<MIconButtonProps> = ({
  onClick, children, className, border
}) => {
  const theme = useTheme();

  let style = {
    border: 'none'
  } as React.CSSProperties;

  // let defaultColor =

  if (border) {
    switch (border) {
      case 'sm': {
        style.border = '1px solid';
        break;
      }
      case 'md': {
        style.border = '2px solid';
        break;
      }
      case 'lg': {
        style.border = '3px solid';
        break;
      }
      default: {
        style.border = '2px solid';
      }
    }
  }

  style = {
    ...style,
    color: theme.palette.primary.main
  };

  return (
    <IconButton onClick={onClick} className={className} style={style}>
      {children}
    </IconButton>
  );
};
