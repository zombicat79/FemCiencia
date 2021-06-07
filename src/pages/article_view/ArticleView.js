import fakeArticles from './../../fake-articles.json';

const ArticleView = (props) => {
    const { id } = props.match.params;
    const requestedArticle = fakeArticles.articles.filter((current) => {
        if (current._id == id) {
            return current;
        }
    })
    console.log(requestedArticle)

    return (
        <main>
            <section>
                <h1>{requestedArticle[0].title}</h1>
                <div>
                    <h3>{requestedArticle[0].scienceField}</h3>
                    <h3>{requestedArticle[0].author} {requestedArticle[0].date}</h3>
                </div>
                <img src={requestedArticle[0].picture} />
            </section>
            <section>
                <p>{requestedArticle[0].body}</p>
            </section>
        </main>
    )
}

export default ArticleView;