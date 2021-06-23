import { AppBar, Toolbar, IconButton, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        flexGrow: 1,
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
}

const HeaderNavbar = (props) => {
    const { classes } = props;
    
    return (
        <nav className={classes.root}>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    <Button color="inherit">Identifica't</Button>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </nav>      
    )
}

export default withStyles(styles)(HeaderNavbar);