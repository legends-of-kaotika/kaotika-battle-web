import { Player } from "../../Interfaces/Player";
import PotionContainer from "../Potions/PotionContainer";
import Battle from "./Battle";
interface BattleContainerProps {
    leftPlayer: Player;
    rightPlayer: Player;
}

const BattleContainer: React.FC<BattleContainerProps> = ({leftPlayer, rightPlayer}) => {
    return (
        <div className="w-[100%] h-[50%] flex -mt-[5%] justify-around">
            <PotionContainer></PotionContainer>
            <Battle leftPlayer={leftPlayer} rightPlayer={rightPlayer}/>
        </div>
    )
}

export default BattleContainer;