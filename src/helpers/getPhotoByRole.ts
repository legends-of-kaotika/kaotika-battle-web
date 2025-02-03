import { Player } from "../Interfaces/Player";

export function getPhotoByRole(player: Player): string {
  const role = player.profile?.name;
  let image;

  switch (role) {
    case "Juggler":
      image = '/images/Warrior1.png';
      break;

    case "Pariah":
      image = '/images/Warrior1.png';
      break;

    case "Bumbler":
      image = '/images/Warrior1.png';
      break;
    default:
      image = ''
  }

  return image;
}