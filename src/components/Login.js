import React, { useState } from 'react';
import {
    TextField,
    Card,
    makeStyles,
    CardMedia,
    Typography,
    CardContent,
    Box,
    Button,
} from '@material-ui/core';
import ChatImage from '../assets/chat.png';

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
    },
    login: {
        height: "500px",
        width: "300px",
        marginTop: "70px",
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        height: "230px"
    },
    textField: {
        display: "flex",
        marginTop: "40px",
        justifyContent: "center"
    },
    button: {
        display: "flex",
        position: "relative",
        bottom: "0px",
        justifyContent: "center"
    }

})

const Login = () => {
    const classes = useStyles();
    const [name, setName] = useState('')

    const handleChange = ({val}) => {
        setName(val)
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
                        <TextField variant="outlined" value={name} onChange={handleChange} placeholder="Enter your name" />
                    </div>
                </CardContent>
                {/* <CardActionArea> */}

                <div className={classes.button}>
                    <Button variant="contained" size="large"> Enter Room </Button>
                </div>
                {/* </CardActionArea> */}
            </Card>
        </div>
    )
}

export default Login;