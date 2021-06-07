import { Link } from 'react-router-dom';

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
                <p>{props.article.preview}</p>
            </div>
            <div>
                <Link to={`/article/${props.article._id}`}><button>Més</button></Link>
            </div>
        </div>
    )
}

export default Card;