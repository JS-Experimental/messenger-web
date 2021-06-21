import React from 'react';

type DialogContextProps = {
  openDialog: boolean;
  handleDialogOpen: () => void;
  handleDialogClose: () => void;
};

const UsernameDialogContext = React.createContext<DialogContextProps>({
  openDialog: false,
  handleDialogOpen: () => {},
  handleDialogClose: () => {}
});

export const useUsernameDialog = () => React.useContext(UsernameDialogContext);

export interface UsernameDialogProviderPropsType {
  children: React.ReactNode
}

export const UsernameDialogProvider: React.FC<UsernameDialogProviderPropsType> = ({ children }) => {
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const handleDialogOpen = () => {
    setOpenDialog(true);
  };
  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  const value = { openDialog, handleDialogClose, handleDialogOpen };
  return (
    <UsernameDialogContext.Provider
      value={value}
    >
      {children}
    </UsernameDialogContext.Provider>
  );
};
