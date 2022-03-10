type Piece = {
  isOnBoard: boolean;
  isStacked: boolean;
  boardPosition: number;
  associatedPlayerId: string;
  color: any;
}

export default Piece;