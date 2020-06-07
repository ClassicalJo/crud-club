import React from 'react'
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container"

let Line = props => {
    return (
        <Container>
            <Typography display="inline" color="primary" variant='h6'>{`${props.field}: `}</Typography>
            <Typography display="inline">{props.value}</Typography>
        </Container>
    )
}

export default Line
