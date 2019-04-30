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

export function toColor(chess: Chess) {
  return (chess.turn() === 'w') ? 'white' : 'black';
}

export function playOtherSide(cg: Api, chess: Chess, cgMove = null) {
  return (orig, dest) => {
    chess.move({from: orig, to: dest});
    cg.set({
      turnColor: toColor(chess),
      movable: {
        color: toColor(chess),
        dests: toDests(chess)
      }
    });
    console.log(orig, dest);
    if (cgMove) {
      cgMove.emit({from: orig, to: dest, turn: chess.turn() });
    }
  };
}

export function aiPlay(cg: Api, chess: Chess, delay: number, firstMove: boolean) {
  return (orig, dest) => {
    chess.move({from: orig, to: dest});
    setTimeout(() => {
      const moves = chess.moves({ verbose: true });
      const move = firstMove ? moves[0] : moves[Math.floor(Math.random() * moves.length)];
      // console.log(move, moves);
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

export function opPlay(cg: Api, chess: Chess, cgMove = null) {
  return (orig, dest) => {
    chess.move({from: orig, to: dest});
    // chess.move(move.san);
    // cg.move(move.from, move.to);
    /* cg.set({
      turnColor: toColor(chess),
      movable: {
        color: toColor(chess),
        dests: toDests(chess)
      }
    }); */

    if (cgMove) {
      cgMove.emit({from: orig, to: dest, turn: chess.turn() });
    }
    // cg.playPremove();
  };
}
