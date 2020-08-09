import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import chatRoomStyle from '../../assets/styles/chatroomStyle';

const ChatRoom = ({ name, ...props }) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Card className={classes.chatRoom}>
                <Typography>
                    hello {name} !!
            </Typography>
            </Card>
        </div>
    )
}

export default withStyles(chatRoomStyle)(ChatRoom);
