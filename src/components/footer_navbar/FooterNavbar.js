import React from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        
    }
}

const FooterNavbar = (props) => {
    const { classes } = props;
    const [value, setValue] = React.useState(0);
    
    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
            >
            <BottomNavigationAction label="Info"/>
            <BottomNavigationAction icon={<HomeIcon />} />
            <BottomNavigationAction label="Contacte" />
        </BottomNavigation>           
        
        /* <section>
            <div>
                <Link to="/info">Info</Link>
            </div>
            <div>
                <Link to="/">Logo</Link>
            </div>
            <div>
                <Link to="/contact">Contact</Link>
            </div>
        </section>*/
    )
}

export default withStyles(styles)(FooterNavbar);