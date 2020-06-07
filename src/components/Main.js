import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from "@material-ui/core/Typography"
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4),
    },
    text: {
        padding: theme.spacing(2)
    }
}));

let Main = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Typography variant='h5' color="primary">CRUD Football CLUBS</Typography>
            <Typography className={classes.text}>A small CRUD app to manage a database containing the football clubs of England.</Typography>
            <Typography className={classes.text}>You can create, read, update and delete the data which is provided by a node server.</Typography>
            <Typography className={classes.text}>Done with React, Material-UI and Express.</Typography>
        </Container>
    )
}

export default Main
