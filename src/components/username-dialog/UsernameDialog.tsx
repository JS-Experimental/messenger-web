import React from 'react';
import {
  Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid
} from '@material-ui/core';

export type OnChangeUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => void;

const defaultOpen:boolean = false;
export interface UsernameDialogProps{
  open: typeof defaultOpen | boolean,
  handleClose(): any,
  onChange: OnChangeUsernameInput
}

export const UsernameDialog: React.FC<UsernameDialogProps> = ({
  open = defaultOpen, handleClose, onChange
}) => (
  <Grid>
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>Chat</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter your name to start chatting with friends.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Username"
          type="email"
          onChange={onChange}
          fullWidth
          id="dialog-username"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Enter
        </Button>
      </DialogActions>
    </Dialog>
  </Grid>
);
