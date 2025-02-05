import 'animate.css';

interface InitCharacterProps{
  character: string;
  styleClass: string;
}

export default function InitCharacter({character, styleClass} : InitCharacterProps){


  return (
    <div className={`animate__animated ${styleClass}`}>
      <img
        src={character}
      />
    </div>
  );
}