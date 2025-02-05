import 'animate.css';

interface InitCharacterProps{
  character: string;
  styleClass: string;
}

export default function InitCharacter({character, styleClass} : InitCharacterProps){


  return (
    <div className={`animate__animated ${styleClass}  border-2 border-orange-200`}>
      <img
        src={character}
      />
    </div>
  );
}