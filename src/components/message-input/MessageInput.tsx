import React from 'react';
import {
  IconButton, makeStyles, TextField, useTheme
} from '@material-ui/core';
import { IoIosSend } from 'react-icons/io';
import { AppTheme } from '../../config/theme/Theme.v1';

export type OnChangeMessageInput = (e: React.ChangeEvent<HTMLInputElement>) => void;

export interface MessageInputProps {
    onChange?: OnChangeMessageInput;
    onEnter?: () => void;
}

const useStyles = makeStyles((theme: AppTheme) => ({
  textField: {
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`
  },
  sendButton: {
    padding: theme.spacing(0)
  }
}));

export const MessageInput: React.FC<MessageInputProps> = ({ onChange, onEnter }) => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <form noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="Input message"
        fullWidth
        multiline
        variant="outlined"
        onChange={onChange}
        InputProps={{
          endAdornment: (
            <IconButton onClick={onEnter} className={styles.sendButton}>
              <IoIosSend size="40" color={theme.palette.primary.main} />
            </IconButton>
          ),
          className: styles.textField
        }}
      />
    </form>
  );
};
