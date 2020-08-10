import React from 'react';
import { Paper, withStyles, Divider } from '@material-ui/core';
import ChatRoomHeader from './ChatRoomHeader';
import chatRoomStyle from '../../assets/styles/chatroomStyle';
import ChatLog from './ChatLog';
import ChatInput from './ChatInput';

const ChatRoom = ({ name, ...props }) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Paper elevation={8} className={classes.container}>
                <ChatRoomHeader name={name} />
                <Divider />
                <ChatLog />
                <ChatInput />
            </Paper>
        </div>
    )
}

export default withStyles(chatRoomStyle)(ChatRoom);
