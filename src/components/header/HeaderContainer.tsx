import RoundContainer from "./RoundContainer";
import HealthComponent from "./HealthComponent";

interface HeaderInfoContainer {

}

const HeaderContainer: React.FC<HeaderInfoContainer> = ({ }) => {

    return (
        <div className="flex flex-row w-full h-4/12 justify-center items-center rounded-md">
            
            {/* <RoundContainer/> */}
            <RoundContainer/>

            {/* <HealthComponent*/}
            <HealthComponent health={100}/>

        </div>
    );
};

export default HeaderContainer;