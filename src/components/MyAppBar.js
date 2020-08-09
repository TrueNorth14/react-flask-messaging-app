import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core';

const MyAppBar = () => {
    return (
        <AppBar >
            <Toolbar>
                <Typography variant="h6">
                    Global Room
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default MyAppBar;
