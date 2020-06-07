import React from 'react'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { useFormFields, useErrorFields } from "./customHooks/useFormFields"
import { makeStyles } from '@material-ui/core'
import Crest from './form/Crest'

let useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4),
    },
    title: {
        color: "#3F51B5",
        paddingBottom: "20px",
    },
    list: {
        py: theme.spacing(2),
        columnCount: "1",
        [theme.breakpoints.up("md")]: {
            columnCount: "2"
        }
    },
    listElement: {
        mx: "auto",
    },
    submit: {
        marginTop: theme.spacing(4),
        float: "right",
    },
}))

let Form = () => {
    let fields = useFormFields()
    let errors = useErrorFields()
    let classes = useStyles()
    function handleChange(e) {
        let name = e.target.name
        if (!RegExp(fields[name].pattern).test(e.target.value)) errors[name].setter(true)
        else (errors[name].setter(false))
        fields[name].setter(e.target.value)
    }

    return (
        <div className={classes.root}>
            <Container>
                <Typography
                    className={classes.title}
                    variant="h5">
                    Add a new club
                </Typography>
                <Box
                    borderColor="primary.main"
                    className={classes.list}
                    component="form"
                    encType="multipart/form-data"
                    id="new-club"
                    action="/form"
                    method="post">
                    <Crest source="https://dummyimage.com/500/000/ffffff&text=Add+Club+Crest+Img" />
                    {Object.keys(fields).map((key, index) =>
                        (
                            <Box
                                pr="20px"
                                key={`textfield${index}`}
                                className={classes.listElement}>
                                <TextField
                                    fullWidth
                                    label={fields[key].label}
                                    required={true}
                                    name={key}
                                    onChange={handleChange}
                                    type="text"
                                    form="new-club"
                                    error={errors[key].value}
                                    value={fields[key].value}
                                    inputProps={{ pattern: fields[key].pattern }}
                                />
                            </Box>
                        )
                    )}
                    <Box
                        className={classes.listElement}>
                        <TextField
                            name="areaId"
                            label="Area ID"
                            value="2072"
                            style={{ display: 'none' }} />
                    </Box>
                    <TextField
                        name="areaCountry"
                        label="Country"
                        value="England"
                        style={{ display: 'none' }} />
                </Box>

                <Button
                    variant="contained"
                    type='submit'
                    form="new-club"
                    className={classes.submit}>
                    Submit
                </Button>
            </Container>
        </div>
    )
}
export default Form
