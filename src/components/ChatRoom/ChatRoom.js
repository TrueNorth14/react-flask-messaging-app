import React from 'react';
import { Paper, withStyles } from '@material-ui/core';
import ChatRoomHeader from './ChatRoomHeader';
import chatRoomStyle from '../../assets/styles/chatroomStyle';

const ChatRoom = ({ name, ...props }) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Paper elevation={8} className={classes.container}>
                <ChatRoomHeader name={name} />
                <ChatLog />
            </Paper>
        </div>
    )
}

export default withStyles(chatRoomStyle)(ChatRoom);
