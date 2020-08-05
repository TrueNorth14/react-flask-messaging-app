import React from 'react';
import { TextField, Card, makeStyles, CardMedia } from '@material-ui/core'

const useStyles = makeStyles({
    login: {
        height: "70vh",
        minWidth: "300px",
        marginTop: "60px",
        alignItems: "center"

    }
})

const Login = () => {
    const classes = useStyles();

    return (
        <div style={{ display: "flex", justifyContent: "center"}}>
            <Card className={classes.login} elevation={8}>

                <TextField placeholder="Enter your name" />
            </Card>
        </div>
    )
}

export default Login;