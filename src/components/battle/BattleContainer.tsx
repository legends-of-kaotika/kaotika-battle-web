import PotionContainer from "../Potions/PotionContainer";
import Battle from "./Battle";

const BattleContainer: React.FC = () => {
    return (
        <div className="w-[100%] h-[50%] flex -mt-[5%] justify-around">
            <PotionContainer healing={true} antidote={true} enhancer={true}></PotionContainer>
            <Battle/>
        </div>
    )
}

export default BattleContainer;