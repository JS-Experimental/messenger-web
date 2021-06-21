import React from 'react';

import { Container, makeStyles } from '@material-ui/core';
import { AppHeader } from '../../app-header/AppHeader';
import { AppTheme } from '../../../config/theme/Theme.v1';

export interface LayoutMessengerProps {
    children?: React.ReactNode
}

const useStyles = makeStyles((theme: AppTheme) => ({
  header: {
    marginBottom: theme.spacing(4)
  }
}));

export const LayoutMessenger: React.FC<LayoutMessengerProps> = ({ children }) => {
  const styles = useStyles();

  return (
    <Container>
      <AppHeader
        className={styles.header}
        onClickMenu={() => 0}
      />
      {children}
    </Container>
  );
};
