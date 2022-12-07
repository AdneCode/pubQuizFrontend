import { useSelector, useDispatch } from "react-redux";
import { selectRoom } from "../../store/Room/selectors";

export const Scorepage = () => {
  const room = useSelector(selectRoom);
  const playerArray = room?.players;
  const sortedPlayerArray = playerArray.sort((a, b) => b.score - a.score);
  console.log("playerArray", playerArray);

  return (
    <div>
      <h1>Player Ranking:</h1>
      <ol>
        {sortedPlayerArray.map((player) => {
          return (
            <li>
              Name: {player.name} Score: {player.score}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
