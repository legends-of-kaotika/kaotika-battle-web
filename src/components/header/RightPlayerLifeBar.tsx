import rightLifeBar from '/images/life_bar_right.gif'

interface RightPlayerLifeBarInterface {
  maxHitpoints: number,
  hitpoints: number,
}

const RightPlayerLifeBar: React.FC<RightPlayerLifeBarInterface> = ({ maxHitpoints, hitpoints }) => {

  return (
    <div className="flex h-full w-full rounded-md items-center justify-center z-0">
      <img src={rightLifeBar}
        alt="Life Bar"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default RightPlayerLifeBar;