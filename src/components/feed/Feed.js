import Card from './../card/Card';

const Feed = (props) => {
    return (
        <article>
            {props.articles.map((oneArticle) => {
                return <Card key={oneArticle._id} article={oneArticle} />
            })}
        </article>
    )
}

export default Feed;