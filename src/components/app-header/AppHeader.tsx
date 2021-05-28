import React from 'react';
import {
  Grid,
  Typography,
  makeStyles,
  createStyles,
  useTheme,
  IconButton
} from '@material-ui/core';
import { AiOutlineMenu } from 'react-icons/ai';
import { AppTheme } from '../../config/theme/Theme.v1';

export interface AppHeaderProps {
    onClickMenu: () => void;
    className?: string;
}

const useStyles = makeStyles((theme: AppTheme) => createStyles({
  grid: {
    backgroundColor: theme.palette.primary.main,
    height: 80,
    padding: `0px ${theme.spacing(2)}px`,
    borderRadius: 5
  },
  headerTitle: {
    color: 'white'
  }
}));

export const AppHeader: React.FC<AppHeaderProps> = ({ onClickMenu, ...props }) => {
  const theme: AppTheme = useTheme();
  const style = useStyles();

  return (
  // <Container>
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={`${style.grid} ${props?.className}`}
    >
      <Typography variant="h5" className={style.headerTitle}>Messenger</Typography>
      <IconButton onClick={onClickMenu}>
        <AiOutlineMenu size={theme.size.icons.md} color="white" />
      </IconButton>
    </Grid>
  // </Container>
  );
};
