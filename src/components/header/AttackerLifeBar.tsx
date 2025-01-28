import leftRightBar from '/images/life_bar_left.gif'

interface AttackerLifeBar {
  maxHitpoints: number,
  hitpoints: number,
}

const AttackerLifeBar: React.FC<AttackerLifeBar> = ({ maxHitpoints, hitpoints }) => {

  return (
    <div className="flex h-full w-full rounded-md items-center justify-center z-0">
      <img src={leftRightBar}
        alt="Life Bar"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default AttackerLifeBar;