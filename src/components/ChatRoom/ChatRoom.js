import React from 'react';
import { Paper, Typography, withStyles } from '@material-ui/core';
import chatRoomStyle from '../../assets/styles/chatroomStyle';

const ChatRoom = ({ name, ...props }) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Paper elevation={8} className={classes.container}>
                <div>

                </div>
                <Typography>
                    hello {name} !!
                </Typography>
            </Paper>
        </div>
    )
}

export default withStyles(chatRoomStyle)(ChatRoom);
