import clasess from './Card.module.css'
const Card = props => {
return (
    <div className={`${clasess.card} ${props.cssClass}`}>
        {props.children}
    </div>
)
}

export default Card;