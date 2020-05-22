export default {
  meta: {
    players: ['ojan', 'mulih', 'robert', 'kaneki'],
    state: 'LOBBY', // LOBBY, GAME, END
  },
  game: {
    hands: [['b3'], ['b4'], ['b5'], ['b6']],
    field: ['a3'],
    turn: 3, // 0-3
    skip: [0, 1, 2],
  },
}
