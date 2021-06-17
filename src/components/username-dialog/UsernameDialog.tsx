import React from 'react';
import {
  Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid
} from '@material-ui/core';

export type OnChangeUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => void;

export interface UsernameDialogProps{
  open: boolean,
  handleClose(): any,
  onChange: OnChangeUsernameInput
}

export const UsernameDialog: React.FC<UsernameDialogProps> = ({
  open, handleClose, onChange
}) => (
  <Grid>
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>Messenger</DialogTitle>
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
