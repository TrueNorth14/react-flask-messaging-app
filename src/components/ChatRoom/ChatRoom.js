import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core';


const ChatRoom = ({ name, ...props }) => {

    return (
        <div>
            hello { name }!
        </div>
    )
}

export default ChatRoom;