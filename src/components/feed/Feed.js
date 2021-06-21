import { Container } from '@material-ui/core';

import Card from './../card/Card';

const Feed = (props) => {
    return (
        <Container component="article">
            {props.articles.map((oneArticle) => {
                return <Card key={oneArticle._id} article={oneArticle} />
            })}
        </Container>
    )
}

export default Feed;