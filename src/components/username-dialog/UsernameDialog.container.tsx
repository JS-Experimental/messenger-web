import React from 'react';
import { OnChangeUsernameInput, UsernameDialog } from './UsernameDialog';

export interface UsernameDialogContainerProps {}

export const UsernameDialogContainer: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = React.useState('');

  React.useEffect(() => {
    setOpen(true);
  }, []);

  const handleCloseDialog = () => {
    setOpen(false);
    console.log(username);
  };

  const onChangeUsername: OnChangeUsernameInput = (e) => {
    setUsername(e.currentTarget.value);
  };

  return (
    <UsernameDialog
      open={open}
      onChange={onChangeUsername}
      handleClose={handleCloseDialog}
    />
  );
};
