import { useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import ArticleSearch from './../../components/article_search/ArticleSearch';
import Feed from './../../components/feed/Feed';

import fakeArticles from './../../fake-articles.json';

const styles = {
    topContainer: {
        marginTop: "6em",
        marginBottom: "6em"
    },
    mainTitle: {
        fontSize: "10px"
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
        <main>
            <Box component="section" className={classes.topContainer}>
                <Typography variant="h2" component="h1" color="primary" align="center">FemCiència</Typography>
            </Box>
            <section>
                <h1>FemCiència</h1>
                <h2>El teu espai de divulgació científica en català</h2>
                <img src="https://pbs.twimg.com/profile_images/433644389982695425/iUs2iSfw_400x400.png" height="200" />
            </section>
            <section>
                <ArticleSearch handleSearch={handleSearch} searchValue={searchValue} />
            </section>
            <section>
                <Feed articles={feed} />
            </section>
        </main>
    )
}

export default withStyles(styles)(Main);