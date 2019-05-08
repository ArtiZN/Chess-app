export declare type Mode = 'live' | 'bot';
export declare type GameID = string;

export interface ModeListItem {
  title: string;
  mode: Mode;
}

export enum GameModes {
  BOT = 'bot',
  LIVE = 'live'
}
