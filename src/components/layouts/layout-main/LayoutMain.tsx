import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import { AppTheme } from '../../../config/theme/Theme.v1';
import { useUsernameDialog } from '../../../context/UsernameDialog';

export interface LayoutMainProps {
    children?: React.ReactNode
}

const useStyles = makeStyles((theme: AppTheme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    color: 'white',
    backgroundColor: '#43ab43'
  }
}));

export const LayoutMain: React.FC<LayoutMainProps> = ({ children }) => {
  const { handleDialogOpen } = useUsernameDialog();
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <AppBar position="static" className={styles.appBar}>
        <Toolbar>
          <Typography variant="h6" className={styles.title}>
            Messenger
          </Typography>
          <Button color="inherit" onClick={handleDialogOpen}>CHAT</Button>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};
