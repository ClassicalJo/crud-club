import React, { useState } from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Line from "./Line"
import { makeStyles } from '@material-ui/core';
import Modify from './Modify';

const useStyles = makeStyles(theme => ({
    expansionPanel: {
        display: "flex",
        alignItems: "space-between",
        flexDirection: "column-reverse",
        padding: theme.spacing(5),
        [theme.breakpoints.up("md")]: {
            flexDirection: "row"
        }
    },
    expansionChild: {
        flex: 1,
        padding: theme.spacing(2),
    },
    actionZone: {
        display: "flex",
        flex: 1,
        alignItems: 'space-between',
        justifyContent: 'space-around',
        padding: theme.spacing(4),
    },
    card: {
        flex: 1,
        border: "10px solid",
        borderColor: theme.palette.primary.main,
        padding: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    crest: {
        height: "auto",
        width: "100%",
        objectFit: "scale-down"
    }
}))

let ListElement = props => {
    let classes = useStyles()
    let [modify, setModify] = useState(false)
    switch (modify) {
        case true: return <Modify fetchAll={props.fetchAll} club={props.club} cancelModify={() => setModify(false)} />
        default: return (
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${props.index}-content`}
                    id={`panel${props.index}-header`}>
                    <Typography>{props.club.name}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails >
                    <Container className={classes.expansionPanel}>
                        <Container className={classes.expansionChild}>
                            <Line field={"Shortname"} value={props.club.shortName} />
                            <Line field={"TLA"} value={props.club.tla} />
                            <Line field={"Address"} value={props.club.address} />
                            <Line field={"Phone number"} value={props.club.phone} />
                            <Line field={"Website"} value={props.club.website} />
                            <Line field={'E-mail'} value={props.club.email} />
                            <Line field={"Founded"} value={props.club.founded} />
                            <Line field={"Colours"} value={props.club.clubColors} />
                            <Line field={"Venue"} value={props.club.venue} />
                            <Line field={"Last update"} value={props.club.lastUpdated} />
                            <Container className={classes.actionZone}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => setModify(true)}>Modify entry</Button>
                                <Button
                                    onClick={() => props.handleDelete(props.club.id)}
                                    variant="contained"
                                    color="secondary"
                                >Delete entry</Button>
                            </Container>
                        </Container>
                        <Container className={classes.card}>
                            <Box
                                className={classes.crest}
                                component="img"
                                src={props.club.crestUrl}>
                            </Box>
                        </Container>
                    </Container>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
}
export default ListElement
