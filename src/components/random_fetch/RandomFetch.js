import { Button } from '@material-ui/core';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    randomButton: {
        marginTop: "1.5rem",
        width: "100%"
    }
}

const RandomFetch = (props) => {
    const { classes } = props;
    
    return (
        <div>
            <Button variant="contained" color="primary" className={classes.randomButton} 
                startIcon={<WbIncandescentIcon />}>
                Il·lumina'm
            </Button>
        </div>
    )
}

export default withStyles(styles)(RandomFetch);