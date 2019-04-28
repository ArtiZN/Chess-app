import { Api } from 'chessground/api';
import * as Chess from 'chess.js';

export function toDests(chess: Chess, cgMove = null) {
  if (cgMove) {
    cgMove.emit(chess);
  }

  const dests = {};
  chess.SQUARES.forEach(s => {
    const ms = chess.moves({square: s, verbose: true});
    if (ms.length /* && ms.every(m => m.color !== 'b')*/) {
      dests[s] = ms.map(m => m.to);
    }
  });

  return dests;
}

export function playOtherSide(cg: Api, chess: Chess, cgMove) {
  return (orig, dest) => {
    chess.move({from: orig, to: dest});
    cg.set({
      turnColor: toColor(chess),
      movable: {
        color: toColor(chess),
        dests: toDests(chess, cgMove)
      }
    });
  };
}

export function aiPlay(cg: Api, chess, delay: number, firstMove: boolean) {
  return (orig, dest) => {
    chess.move({from: orig, to: dest});
    setTimeout(() => {
      const moves = chess.moves({verbose:true});
      const move = firstMove ? moves[0] : moves[Math.floor(Math.random() * moves.length)];
      chess.move(move.san);
      cg.move(move.from, move.to);
      cg.set({
        turnColor: toColor(chess),
        movable: {
          color: toColor(chess),
          dests: toDests(chess)
        }
      });
      cg.playPremove();
    }, delay);
  };
}

export function toColor(chess: Chess) {
  return (chess.turn() === 'w') ? 'white' : 'black';
}
