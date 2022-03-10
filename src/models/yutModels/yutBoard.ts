import Piece from "./yutPiece";
import Player from "./yutPlayer";

type Board = {
  players: Player[];
  peices: Piece[];
  yutStickCount: number;
  boardWidth: number;
  boardHieght: number;
}

export default Board;