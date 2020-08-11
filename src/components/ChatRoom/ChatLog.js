import React from 'react';
import { withStyles, List, ListItem } from '@material-ui/core';
import chatRoomStyle from '../../assets/styles/chatroomStyle';
import ChatItem from './ChatItem';

const ChatLog = ({ ...props }) => {
    const { classes } = props;

    const data = [
        { name: "Vishnu", message: "This is my message" },
        { name: "Vishnu", message: "This is my message" },
        { name: "Vishnu", message: "This is my message" },
        { name: "Vishnu", message: "This is my message" },
        { name: "Vishnu", message: "This is my message" },
        { name: "Vishnu", message: "This is my message" },
        { name: "Vishnu", message: "This is my message" },
        { name: "Vishnu", message: "This is my message" },
        { name: "Vishnu", message: "This is my message" },
        { name: "Vishnu", message: "This is my message" },
        { name: "Vishnu", message: "This is my message" },
        { name: "Vishnu", message: "This is my message" },
        { name: "Vishnu", message: "This is my message" },
        { name: "Vishnu", message: "This is my message" },
        { name: "Vishnu", message: "This is my message" },
        { name: "Vishnu", message: "This is my message" },
        { name: "Vishnu", message: "This is my message" },
        { name: "Vishnu", message: "This is my message" },
        { name: "Vishnu", message: "This is my message" },
        { name: "Vishnu", message: "This is my message" },
        { name: "Vishnu", message: "This is my message" },
        { name: "Vishnu", message: "This is my message" },
    ];

    return (
        <div className={classes.log}>
            <List>
                {
                    data.map(item => <ChatItem name={item.name} message={item.message} />)
                }
            </List>
        </div>
    )
}

export default withStyles(chatRoomStyle)(ChatLog);