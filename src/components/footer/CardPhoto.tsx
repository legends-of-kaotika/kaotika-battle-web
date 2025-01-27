import CardImage from "../../assets/player_card.png";

interface CardPhoto{

}

const CardPhoto: React.FC<CardPhoto> = ({}) => {
    return (
        <div className="w-[35%] h-full -skew-x-12">
            <img className="w-[100%] h-full" src={CardImage}/>
        </div>
    )
}

export default CardPhoto;