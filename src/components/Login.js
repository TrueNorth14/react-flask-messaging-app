import React from 'react';
import {
    TextField,
    Card,
    CardMedia,
    Typography,
    CardContent,
    Box,
    Button,
    withStyles
} from '@material-ui/core';
import ChatImage from '../assets/images/chat.png';
import loginStyle from '../assets/styles/loginStyle';

const Login = ({ states, stateFunctions, ...props }) => {
    const { classes } = props;

    const { name, isEntered } = states;
    const { setName, setIsEntered } = stateFunctions;

    const handleChange = ({ val }) => {
        setName(val)
        console.log(name)
    }

    const handleKeyEnter = (ev) => {
        if (ev.key === 'Enter')
            handleNavigate()
    }

    const handleNavigate = () => {
        setIsEntered(true)
    }

    return (
        <div className={classes.root}>
            <Card className={classes.login} elevation={8}>
                <CardMedia className={classes.image} component="img" image={ChatImage} />
                <CardContent style={{ alignItems: "center" }}>
                    <Typography variant="h4" align="center" >
                        <Box fontWeight="fontWeightLight">The Global Room</Box>
                    </Typography>
                    <Typography variant="overline" align="center" >
                        <Box fontWeight="fontWeightLight">Enter your name below</Box>
                    </Typography>
                    <div className={classes.textField}>
                        <TextField variant="outlined" onKeyPress={handleKeyEnter} value={name} onChange={handleChange} placeholder="Enter your name" />
                    </div>
                </CardContent>
                <div className={classes.button}>
                    <Button variant="contained" onClick={handleNavigate} size="large"> Enter Room </Button>
                </div>
            </Card>
        </div>
    )
}

export default withStyles(loginStyle)(Login);