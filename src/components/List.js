import React, { useLayoutEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListElement from './list/ListElement';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container"

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    title: {
        padding: theme.spacing(2)
    },

}));

let List = () => {
    const classes = useStyles();
    let [list, setList] = useState(null)
    async function handleDelete(n) {
        let response = await fetch(`http://localhost:8080/clubs/${n}`, {
            method: "DELETE"
        })
        let data = await response.json()
        setList(Object.values(data))
    }
    async function fetchAll() {
        let response = await fetch("http://localhost:8080/clubs");
        let data = await response.json()
        setList(Object.values(data))
    }
    useLayoutEffect(() => {
        fetchAll()
    }, [])
    switch (list) {
        case null: return (
            <div className={classes.root}>
                <Typography>Loading...</Typography>
            </div>
        )
        default: return (
            <div className={classes.root}>
                <Container className={classes.title}>
                    <Typography variant="h5" color="primary">
                        All clubs list:
                        </Typography>
                </Container>
                {list.map((key, index) => (
                    <ListElement
                        fetchAll={fetchAll}
                        club={key}
                        key={`listElement${index}`}
                        index={index}
                        handleDelete={handleDelete} />
                ))}
            </div>
        )
    }
}


export default List
