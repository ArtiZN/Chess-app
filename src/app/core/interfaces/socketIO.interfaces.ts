import { Color, Key } from 'chessground/types';

export interface GameConfig {
  gameId: string;
  color: Color;
}

export interface MoveConfig {
  from: Key;
  to: Key;
  turn: Color;
  room: string;
}
