const Card = (props) => {
    return (
        <div>
            <div>
                <img src={props.article.picture} height="150" />
                <div>
                    <p>{props.article.title}</p>
                    <p>{props.article.scienceField}</p>
                    <p>{props.article.author}</p>
                </div>
            </div>
            <div>
                <p>{props.article.body}</p>
            </div>
            <div>
                <button>Més</button>
            </div>
        </div>
    )
}

export default Card;