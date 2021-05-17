import { Container, makeStyles } from '@material-ui/core';
import { AppHeader } from '../../app-header/AppHeader';
import { AppTheme } from '../../../config/theme/Theme.v1';

export interface LayoutMainProps {
    children: JSX.Element
}

const useStyles = makeStyles((theme: AppTheme) => ({
  header: {
    marginBottom: theme.spacing(4)
  }
}));

export const LayoutMain: React.FC<LayoutMainProps> = ({ children }) => {
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
