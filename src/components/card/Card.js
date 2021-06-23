import { Card as CardUI, CardActionArea, CardMedia, CardContent, CardActions, CardHeader, Typography, Box, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = {
    cardContainer: {
        backgroundColor: "lightgrey",
        marginBlock: "2rem"
    },
    cardImage: {
        objectFit: "fill"
    },
    cardContent: {
        textAlign: "center"
    },
    description: {
        marginTop: "1rem"
    },
    buttonContent: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "1rem"
    },
}

const Card = (props) => {
    const { classes } = props;
    
    return (
        <CardUI raised={true} className={classes.cardContainer}>
            <CardActionArea>
                <CardMedia 
                    component="img" 
                    alt="Article main picture"
                    height="200"
                    image={props.article.picture}
                    className={classes.cardImage}   
                />
                <CardContent className={classes.cardContent} component="div">
                    <CardHeader component="div" title={props.article.title}  
                        titleTypographyProps={{ variant: "h5", component: "h3", color: "primary" }} />
                    <Box component="div">
                        <Typography>
                            <strong>{props.article.scienceField}</strong>
                        </Typography>
                        <Typography>
                            <em>{props.article.author}</em>
                        </Typography>
                    </Box>
                    <Box component="div" className={classes.description}>
                        <Typography>
                            {props.article.preview}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.buttonContent}>
                <Link to={`/article/${props.article._id}`} style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="primary">
                        +
                    </Button>
                </Link>
            </CardActions>
        </CardUI>
    )
}

export default withStyles(styles)(Card);