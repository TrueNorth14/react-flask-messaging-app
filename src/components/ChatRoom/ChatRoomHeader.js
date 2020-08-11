import React from 'react';
import { Typography, withStyles, Box } from '@material-ui/core';
import chatRoomStyle from '../../assets/styles/chatroomStyle';

const ChatRoomHeader = ({ name, ...props }) => {
    const { classes } = props;

    return (
        <div className={classes.header}>
            <div className={classes.headerContent}>
                <Typography variant="h5">
                    <Box fontWeight="fontWeightLight">
                        Welcome {name}
                    </Box>
                </Typography>
            </div>
        </div>
    )
}

export default withStyles(chatRoomStyle)(ChatRoomHeader);