import { Link } from 'react-router-dom';
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
    const { classes, articles } = props;
    const randomArticle = Math.floor(Math.random() * articles.length);
    
    return (
        <div>
            <Link to={`/article/${articles[randomArticle]._id}`} style={{ textDecoration: "none" }}>
                <Button variant="contained" color="primary" className={classes.randomButton} 
                    startIcon={<WbIncandescentIcon />}>
                    Il·lumina'm
                </Button>    
            </Link>
        </div>
    )
}

export default withStyles(styles)(RandomFetch);