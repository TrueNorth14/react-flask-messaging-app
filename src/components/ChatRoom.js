import React, { useEffect } from 'react';
import { useStyles } from '@material-ui/core';


const ChatRoom = ({ states }) => {
    const { name } = states

    return (
        <div>
            hello { name}!
        </div>
    )
}

export default ChatRoom