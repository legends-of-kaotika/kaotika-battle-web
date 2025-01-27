import AttackerAvatar from "./AttackerAvatarContainer";

interface HeaderInfoContainer {

}

const HeaderContainer: React.FC<HeaderInfoContainer> = ({ }) => {

    return (
        <div className="relative flex flex-row w-full h-4/12 justify-between rounded-md border-1">

            {/* <Attacker Avatar/> */}
            <AttackerAvatar />
            
            <div className="justify-items-start items-start flex h-[50%] w-[27%] ml-[2.5%] mt-[2%] rounded-md border-1 border-orange-300">

            </div>

            <div className="justify-items-start items-start flex h-full w-1/12 rounded-md border-1 border-blue-500">

            </div>

            <div className="justify-items-start items-start flex h-[50%] w-[27%] mr-[2.5%] mt-[2%] rounded-md border-1 border-red-500">

            </div>

            <div className="justify-items-start items-start h-[40%] w-[7%] mr-[4.5%] mt-[1%] flex rounded-md border-1 border-purple-500">

            </div>

        </div>
    );
};

export default HeaderContainer;