import { Color, Key } from 'chessground/types';

import { GameID } from './game.interafces';

export interface GameConfig {
  gameID: GameID;
  orientation: Color;
}

export interface MoveConfig {
  from: Key;
  to: Key;
  turn: Color;
  room: string;
}
