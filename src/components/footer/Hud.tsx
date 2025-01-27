import History from "./History";
import TurnPhotos from "./TurnPhotos";
import Phase from "./Phase";

interface Hud {

}

const Hud: React.FC<Hud> = ({}) => {
    return (
        <div className="w-[100%] border-2 h-[25%] flex justify-between mt-10">
            <Phase/>
            <TurnPhotos />
            <History/>
        </div>
    )
}

export default Hud;