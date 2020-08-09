import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import chatRoomStyle from '../../assets/styles/chatroomStyle';

const ChatRoom = ({ name, ...props }) => {
    const { classes } = props;

    return (
        <Card className={classes.root}>
            <Typography>

                hello {name} sdfsd!d
            </Typography>
        </Card>
    )
}

export default withStyles(chatRoomStyle)(ChatRoom);