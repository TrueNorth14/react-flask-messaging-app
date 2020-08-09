import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box
} from '@material-ui/core';

const MyAppBar = () => {
    return (
        <AppBar >
            <Toolbar>
                <Typography variant="h5">
                    <Box fontWeight="fontWeightLight">
                        The Global Room
                    </Box>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default MyAppBar;
