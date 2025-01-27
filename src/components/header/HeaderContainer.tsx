import RoundContainer from "./RoundContainer";

interface HeaderInfoContainer {

}

const HeaderContainer: React.FC<HeaderInfoContainer> = ({ }) => {

    return (
        <div className="flex flex-row w-full h-4/12 justify-center items-center rounded-md">
            
            {/* <RoundContainer/> */}
            <RoundContainer/>

        </div>
    );
};

export default HeaderContainer;