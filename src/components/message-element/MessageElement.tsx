import React from 'react';
import {
  Box, Grid, makeStyles, Paper, Typography
} from '@material-ui/core';

export interface MessageElementProps {
  id: string;
  sender: 'me' | 'others',
  senderImage: string;
  messageText: string;
  className?: string;
}

interface StyleProps {
  sender: MessageElementProps['sender']
}

const useStyles = makeStyles((theme) => ({
  imgBox: {
    '& img': {
      borderRadius: '50%',
      width: '100%'
    },
    width: '70px'
  },
  textBox: {
    padding: `${theme.spacing(1)}px ${theme.spacing(3)}px`,
    backgroundColor: `${theme.palette.grey['100']}`,
    display: 'inline-block'
  },
  messageBox: {
    maxWidth: `calc(100% - ${theme.spacing(2) + 70}px)`,
    marginLeft: (props: StyleProps) => (props.sender === 'others' ? `${theme.spacing(2)}px` : ''),
    marginRight: (props: StyleProps) => (props.sender === 'me' ? `${theme.spacing(2)}px` : '')
  }
}));

export const MessageElement: React.FC<MessageElementProps> = ({
  id, sender, senderImage, messageText, ...props
}) => {
  const style = useStyles({ sender });
  const direction = sender === 'me' ? 'row-reverse' : 'row';

  return (
    <Grid
      container
      direction={direction}
      justify="flex-start"
      alignItems="flex-start"
      {...props}
    >
      <Box className={style.imgBox}>
        <img src={senderImage} alt="User who send this message" />
      </Box>
      <Box className={style.messageBox}>
        <Paper elevation={3} className={style.textBox}>
          <Typography>{messageText}</Typography>
        </Paper>
      </Box>
    </Grid>
  );
};
