import React from 'react';
import { Typography, withStyles } from '@material-ui/core';
import chatRoomStyle from '../../assets/styles/chatroomStyle';

const ChatRoomHeader = ({ name, ...props }) => {
    const { classes } = props;

    return (
        <div className={classes.header}>
            <Typography>
                hello {name}!!
            </Typography>
        </div>
    )
}

export default withStyles(chatRoomStyle)(ChatRoomHeader);