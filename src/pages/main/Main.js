import { useState } from 'react';
import { Container, Box, Typography, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import ArticleSearch from './../../components/article_search/ArticleSearch';
import Feed from './../../components/feed/Feed';

import fakeArticles from './../../fake-articles.json';
import atomicPic from './../../images/atomic.png';

const styles = {
    topContainer: {
        marginTop: "6rem",
        marginBottom: "2rem"
    },
    motto: {
        marginInline: "3rem",
        marginTop: "0.5rem",
        marginBottom: "2rem"
    },
    logo: {
        display: "block",
        marginInline: "auto",
        width: "50%",
        maxHeight: "20rem",
        maxWidth: "20rem"
    },
    middleContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "3rem"
    },
    bottomContainer: {
        paddingBlock: "0.5rem",
        marginBottom: "1rem"
    }
}

const Main = function(props) {
    const { classes } = props;
    const articles = fakeArticles.articles;
    
    const [feed, setFeed] = useState(articles)

    const [searchValue, setSearchValue] = useState("")
    const handleSearch = (event) => {
        const { value } = event.target;
        setSearchValue(value);
        setFeed(() => {
            if (value.length === 0) {
                return articles
            }
            else {
                return articles.filter((obj) => obj.title.includes(searchValue)) 
            }
        });
    }
    
    return (
        <Container component="main">
            <Box component="section" className={classes.topContainer}>
                <Typography variant="h2" component="h1" color="primary" align="center">FemCiència</Typography>
                <Typography variant="h5" component="h2" align="center" className={classes.motto}>El teu espai de divulgació científica en català</Typography>
                <img src={atomicPic} className={classes.logo} alt="Atom logo" />
            </Box>
            <Box component="section" className={classes.middleContainer}>
                <ArticleSearch handleSearch={handleSearch} searchValue={searchValue} articles={feed} />
            </Box>
            <Paper component="section" className={classes.bottomContainer} elevation={10}>
                <Feed articles={feed} />
            </Paper>
        </Container>
    )
}

export default withStyles(styles)(Main);