import React, { useState } from 'react'
import Container from "@material-ui/core/Container"
import { makeStyles } from '@material-ui/core'
import Box from "@material-ui/core/Box"
import TextField from "@material-ui/core/TextField"
let useStyles = makeStyles(theme => ({
    crest: {
        height: "auto",
        width: "100%",
        objectFit: "scale-down",
    },
}))
let Crest = React.forwardRef((props, ref) => {
    let classes = useStyles()
    let [crestImg, setCrestImg] = useState(props.source)
    let inputRef = React.createRef()
    async function handleUpload(e) {
        let headers = new Headers()
        let body = new FormData()
        body.append("crest", e.target.files[0], e.target.value)
        let init = {
            method: "POST",
            headers,
            body
        }
        let req = new Request("/upload", init)
        let response = await fetch(req)
        let text = await response.text()
        setCrestImg(text)
    }
    return (
        <Container className={classes.card}>
            <Box
                component="img"
                src={crestImg}
                className={classes.crest}
                onClick={() => inputRef.current.click()}
                style={{cursor: "pointer"}}
            />
            <input
                onChange={handleUpload}
                ref={inputRef}
                type="file"
                name="crest"
                form="new-club"
                style={{ display: "none" }}
                accept="image/*"
            />
            <TextField inputProps={{ ref: ref }} form="new-club" name="crestUrl" value={crestImg} style={{ display: 'none' }}></TextField>
        </Container>
    )
})

export default Crest
