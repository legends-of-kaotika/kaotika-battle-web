import RoundContainer from "./RoundContainer";

interface HeaderInfoContainer {

}

const HeaderContainer: React.FC<HeaderInfoContainer> = ({ }) => {

    return (
        <div className="flex flex-row w-full h-3/12 justify-center items-center rounded-md border-1 border-white-300">
            
            {/* <RoundContainer/> */}
            <RoundContainer/>

        </div>
    );
};

export default HeaderContainer;