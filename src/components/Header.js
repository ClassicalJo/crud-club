import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink } from 'react-router-dom'
import Link from "@material-ui/core/Link"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: "white",
    },
}));

let Header = () => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null)

    function handleClick(e) {
        setAnchorEl(e.currentTarget)
    }

    function handleClose() {
        setAnchorEl(null)
    }

    return (

        <AppBar className={classes.root} position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={handleClick}>
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                    open={!!anchorEl}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <Link component={RouterLink} to='/list'>List of clubs</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link component={RouterLink} to='/form'>Add a new club</Link>
                    </MenuItem>
                </Menu>
                <Typography variant="h6" className={classes.title}>
                    <Link color="inherit" component={RouterLink} to="/">CRUD Clubs</Link>
                </Typography>
            </Toolbar>
        </AppBar>

    )
}

export default Header
