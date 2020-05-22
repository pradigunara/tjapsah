import _ from 'lodash'

/**
 * @typedef {String} HandsEnum
 * @enum {HandsEnum}
 */
export const HANDS = {
  TWO_PAIR: 'TWO_PAIR',
  STRAIGHT: 'STRAIGHT',
  FLUSH: 'FLUSH',
  FULL_HOUSE: 'FULL_HOUSE',
  FOUR_OF_A_KIND: 'FOUR_OF_A_KIND',
  STRAIGHT_FLUSH: 'STRAIGHT_FLUSH',
}

export const HANDS_RANKING = _.invert(_.values(HANDS))
