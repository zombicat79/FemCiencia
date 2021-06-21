import { Card as CardUI, CardActionArea, CardMedia, CardContent, CardActions, CardHeader, Typography, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = {
    cardContainer: {
        backgroundColor: "lightgrey",
        marginBlock: "2rem"
    }
}

const Card = (props) => {
    const { classes } = props;
    
    return (
        <CardUI raised="true" className={classes.cardContainer}>
            <CardActionArea>
                <CardMedia 
                    component="img" 
                    alt="Article main picture"
                    height="150"
                    image={props.article.picture}    
                />
                <CardContent>
                    <CardHeader component="div" title={props.article.title} 
                        titleTypographyProps={{ variant: "h5", component: "h3", color: "primary" }} />
                    <Box component="div">
                        <Typography>
                            {props.article.scienceField}
                        </Typography>
                        <Typography>
                            {props.article.author}
                        </Typography>
                    </Box>
                    <Box component="div">
                        <Typography>
                            {props.article.preview}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={`/article/${props.article._id}`}><button>Més</button></Link>
            </CardActions>
        </CardUI>
    )
}

export default withStyles(styles)(Card);