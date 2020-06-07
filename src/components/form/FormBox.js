import React from 'react'
import Box from "@material-ui/core/Box"
let FormBox = props => {
    return (
        <Box
            borderColor="primary.main"
            className={props.classes}
            component="form"
            encType="multipart/form-data"
            id="new-club"
            action="/form"
            method="post">
            {props.children}
        </Box>
    )
}
export default FormBox
