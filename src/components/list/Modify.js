import React, { useLayoutEffect } from 'react'
import { useFormFields, useErrorFields } from '../customHooks/useFormFields'
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Box from "@material-ui/core/Box"
import Crest from '../form/Crest'
import { makeStyles } from "@material-ui/core"

let Modify = props => {
    let classes = useStyles()
    let fields = useFormFields()
    let errors = useErrorFields()
    let crestRef = React.createRef()
    
    function onChange(e) {
        let name = e.target.name
        if (!RegExp(fields[name].pattern).test(e.target.value)) errors[name].setter(true)
        else (errors[name].setter(false))
        fields[name].setter(e.target.value)
    }

    function validate(formId) {
        if(!document.querySelector(`#modify-form${formId}`).checkValidity()){
            document.querySelector(`#submit-form${formId}`).click()
            return false
        }
        else return true
    }
    async function handleUpdate(clubId) {
        if (!validate(clubId)) return
        let updated = { ...props.club }
        Object.keys(fields).forEach(key => updated[key] = fields[key].value)
        updated.lastUpdated = new Date()
        updated.crestUrl = crestRef.current.value
        let headers = new Headers({ "Content-Type": "application/json" })
        let body = JSON.stringify(updated)
        let init = {
            headers,
            body,
            method: "PUT"
        }
        let request = new Request(`http://localhost:8080/clubs/${updated.id}`, init)
        await fetch(request)
        props.cancelModify()
        props.fetchAll()
    }

    useLayoutMount(() => {
        Object.keys(props.club).forEach(key => {
            if (fields[key]) {
                fields[key].setter(props.club[key])
            }
        })
    })
    return (
        <Box borderColor="primary.main"
            component="form"
            id={`modify-form${props.club.id}`}
            className={classes.list}>
            <Container>
                {Object.keys(fields).map((key, index) =>
                    (
                        <Box
                            pr="20px"
                            key={`textfield${index}`}>
                            <TextField
                                fullWidth
                                label={fields[key].label}
                                required={true}
                                name={key}
                                onChange={onChange}
                                type="text"
                                error={errors[key].value}
                                value={fields[key].value}
                                inputProps={{ pattern: fields[key].pattern }}
                            />
                        </Box>
                    )
                )}
            </Container>
            <Container>
                <Crest ref={crestRef} source={props.club.crestUrl} />
                <Container className={classes.actionZone}>
                    <Button variant="contained" color="primary" onClick={() => handleUpdate(props.club.id)}>Update</Button>
                    <Button variant="contained" onClick={props.cancelModify}>Cancel</Button>
                    <Button id={`submit-form${props.club.id}`} type="submit" form={`modify-form${props.club.id}`} style={{display:'none'}}>Submit</Button>
                </Container>
            </Container>
        </Box>
    )
}


let useStyles = makeStyles(theme => ({
    list: {
        display: 'flex',
        alignItems: "space-between",
        flexDirection: "column",
        padding: theme.spacing(5),
        [theme.breakpoints.up("md")]: {
            flexDirection: "row"
        }
    },
    actionZone: {
        display: "flex",
        flex: 1,
        alignItems: 'space-between',
        justifyContent: 'space-around',
        padding: theme.spacing(4),
    },
}))

let useLayoutMount = fn => useLayoutEffect(fn, [])
export default Modify
