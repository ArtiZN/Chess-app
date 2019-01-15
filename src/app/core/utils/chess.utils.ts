import { Api } from 'chessground/api';
import * as Chess from 'chess.js';

export function toDests(chess: Chess) {
  const dests = {};
  chess.SQUARES.forEach(s => {
    const ms = chess.moves({square: s, verbose: true});
    if (ms.length) {
      dests[s] = ms.map(m => m.to);
    }
  });
  return dests;
}

export function playOtherSide(cg: Api, chess: Chess) {
  return (orig, dest) => {
    chess.move({from: orig, to: dest});
    cg.set({
      turnColor: toColor(chess),
      movable: {
        color: toColor(chess),
        dests: toDests(chess)
      }
    });
  };
}

export function toColor(chess: Chess) {
  return (chess.turn() === 'w') ? 'white' : 'black';
}
