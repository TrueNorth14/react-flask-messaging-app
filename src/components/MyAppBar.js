import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton
} from '@material-ui/core';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';

const MyAppBar = () => {
    return (
        <AppBar >
            <Toolbar>
                <Typography variant="h5">
                    <Box fontWeight="fontWeightLight">
                        The Global Room
                    </Box>
                </Typography>
                <div>
                    <IconButton color={"white"}>
                        <Brightness4OutlinedIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default MyAppBar;
