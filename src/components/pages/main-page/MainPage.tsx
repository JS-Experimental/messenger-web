import {
  Box, Button, makeStyles, Typography,
  CardMedia
} from '@material-ui/core';
import React from 'react';
import { useUsernameDialog } from '../../../context/UsernameDialog';
import { UsernameDialogContainer } from '../../username-dialog/UsernameDialog.container';
import image from '../../../images/test.jpg';
import { AppTheme } from '../../../config/theme/Theme.v1';

const useStyles = makeStyles((theme: AppTheme) => ({
  mainText: {
    position: 'absolute',
    width: '30%',
    top: '50%',
    transform: 'translateY(-50%)',
    left: '15%'
  },
  img: {
    width: theme.spacing(50),
    height: theme.spacing(40),
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '20%'
  },
  textControl: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: '#787878'
  },
  btn: {
    marginTop: theme.spacing(2)
  }
}));

export const MainPage: React.FC = () => {
  const { handleDialogOpen } = useUsernameDialog();
  const styles = useStyles();

  return (
    <>
      <UsernameDialogContainer />
      <Box className={styles.mainText}>
        <Typography variant="h5">Welcome to chatting application</Typography>
        <Box className={styles.textControl}>Just click to button below to start</Box>
        <Typography>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          eaque. Nostrum, quibusdam necessitatibus autem dolorum voluptatum non et ipsam
        </Typography>
        <Box className={styles.btn}>
          <Button variant="outlined" color="primary" onClick={handleDialogOpen}>START CHAT</Button>
        </Box>
      </Box>
      <CardMedia className={styles.img} image={image} />
    </>
  );
};
