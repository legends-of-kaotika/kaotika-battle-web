interface InitCharacterProps{
  character: string;
  styleClass: string;
}

export default function InitCharacter({character, styleClass} : InitCharacterProps){


  return (
    <div className={`${styleClass}`}>
      <img
        src={character}
      />
    </div>
  );
}