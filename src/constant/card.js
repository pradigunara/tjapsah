import _ from 'lodash'

export const RANK = {
  THREE: 'THREE',
  FOUR: 'FOUR',
  FIVE: 'FIVE',
  SIX: 'SIX',
  SEVEN: 'SEVEN',
  EIGHT: 'EIGHT',
  NINE: 'NINE',
  TEN: 'TEN',
  JACK: 'JACK',
  QUEEN: 'QUEEN',
  KING: 'KING',
  ACE: 'ACE',
  TWO: 'TWO',
}

export const SUITE = {
  DIAMONDS: 'DIAMONDS',
  CLUBS: 'CLUBS',
  HEARTS: 'HEARTS',
  SPADES: 'SPADES',
}

export const rankByCode = {
  '3': RANK.THREE,
  '4': RANK.FOUR,
  '5': RANK.FIVE,
  '6': RANK.SIX,
  '7': RANK.SEVEN,
  '8': RANK.EIGHT,
  '9': RANK.NINE,
  a: RANK.TEN,
  b: RANK.JACK,
  c: RANK.QUEEN,
  d: RANK.KING,
  e: RANK.ACE,
  f: RANK.TWO,
}

export const codeByRank = _.invert(rankByCode)

export const suiteByCode = {
  a: SUITE.DIAMONDS,
  b: SUITE.CLUBS,
  c: SUITE.HEARTS,
  d: SUITE.SPADES,
}

export const codeBySuite = _.invert(suiteByCode)
