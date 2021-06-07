import { useState } from 'react';

import ArticleSearch from './../../components/article_search/ArticleSearch';
import Feed from './../../components/feed/Feed';

import fakeArticles from './../../fake-articles.json';

const Main = function() {
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
                return articles.filter((arr) => arr.author.includes(searchValue)) 
            }
        });
    }
    
    return (
        <main>
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

export default Main;