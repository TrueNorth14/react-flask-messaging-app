import React from 'react';
import { withStyles } from '@material-ui/core';
import chatRoomStyle from '../../assets/styles/chatroomStyle';

const ChatLog = ({ ...props }) => {
    const { classes } = props;

    return (
        <div className={classes.log}>
            <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
                <li>Link 5</li>
                <li>Link 6</li>
                <li>Link 7</li>
                <li>Link 8</li>
                <li>Link 9</li>
                <li>Link 10</li>
                <li>Link 11</li>
                <li>Link 13</li>
                <li>Link 13</li>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
                <li>Link 5</li>
                <li>Link 6</li>
                <li>Link 7</li>
                <li>Link 8</li>
                <li>Link 9</li>
                <li>Link 10</li>
                <li>Link 11</li>
                <li>Link 13</li>
                <li>Link 13</li>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
                <li>Link 5</li>
                <li>Link 6</li>
                <li>Link 7</li>
                <li>Link 8</li>
                <li>Link 9</li>
                <li>Link 10</li>
                <li>Link 11</li>
                <li>Link 13</li>
                <li>Link 13</li>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
                <li>Link 5</li>
                <li>Link 6</li>
                <li>Link 7</li>
                <li>Link 8</li>
                <li>Link 9</li>
                <li>Link 10</li>
                <li>Link 11</li>
                <li>Link 13</li>
                <li>Link 13</li>

            </ul>
        </div>
    )
}

export default withStyles(chatRoomStyle)(ChatLog);