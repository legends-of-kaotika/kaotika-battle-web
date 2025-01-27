import React from "react";
import CardPhoto from "./CardPhoto";

interface TurnPhotos{

}

const TurnPhotos: React.FC<TurnPhotos> = ({}) => { 
    return (
        <div className="w-[56%] flex flex-row ">
            <CardPhoto/>
            <CardPhoto></CardPhoto>
            <CardPhoto></CardPhoto>
            <CardPhoto/>
            <CardPhoto/>
        </div>
    )
}

export default TurnPhotos;