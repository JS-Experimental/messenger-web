import { Grid, makeStyles } from '@material-ui/core';
import { QueryStatus } from 'react-query';
import { MessageElement, MessageElementProps } from '../message-element/MessageElement';
import { AppTheme } from '../../config/theme/Theme.v1';

export interface MessageListProps {
  messages: MessageElementProps[];
  status: QueryStatus
}

const useStyles = makeStyles((theme: AppTheme) => ({
  messageElement: {
    marginBottom: `${theme.spacing(3)}px`
  }
}));

export const MessageList: React.FC<MessageListProps> = ({ messages, status }) => {
  const style = useStyles();

  if (status === 'loading') {
    return <p>loading...</p>;
  }

  if (status === 'error') {
    return <p>Something went wrong.</p>;
  }

  return (
    <Grid container>
      {
        messages?.map((message) => (
          <MessageElement {...message} key={message.id} className={style.messageElement} />
        ))
      }
    </Grid>
  );
};
