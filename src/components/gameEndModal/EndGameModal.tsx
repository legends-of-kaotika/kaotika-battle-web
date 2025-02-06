interface EndGameModalProps{
  winner: string;
}

export default function EndGameModal({winner} : EndGameModalProps){
  return (
    <div>
      <p className="text-8xl">
        The winner of the battle is : {winner} 
      </p>
    </div>
  );
}