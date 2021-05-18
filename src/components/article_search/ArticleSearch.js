import Searchbox from './../searchbox/Searchbox';
import RandomFetch from './../random_fetch/RandomFetch';

const ArticleSearch = (props) => {
    return (
        <article>
            <Searchbox handleSearch={props.handleSearch} searchValue={props.searchValue} />
            <RandomFetch />
        </article>
    )
}

export default ArticleSearch;