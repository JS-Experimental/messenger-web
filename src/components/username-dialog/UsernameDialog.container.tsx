import React from 'react';
import { useUsernameDialog } from '../../context/UsernameDialog';
import { UsernameDialog } from './UsernameDialog';

export interface UsernameDialogContainerProps {}

export const UsernameDialogContainer: React.FC = () => {
  const { openDialog, handleDialogClose } = useUsernameDialog();

  return (
    <UsernameDialog
      open={openDialog}
      handleClose={handleDialogClose}
    />
  );
};
