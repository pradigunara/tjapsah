import _ from 'lodash'
import { HANDS_RANKING } from 'src/constant/hands'
import rulesUtil from 'src/util/rules'

/**
 * @typedef {String} Card
 * @example 'a3', 'a4'
 */

/**
 * @param {Array<Card>} cards
 * @returns {(HandsEnum|undefined)}
 */
function checkHands(cards) {
  return _.find(_.values(rulesUtil.handsChecker), _.isString)
}

/**
 * Check if all cards is the same rank
 *
 * @param {Array<Card>} cards
 * @returns {Boolean}
 */
function isUniform(cards) {
  const cardRanks = _.map(cards, _.last)
  const rank = _.head(cardRanks)

  return _.every(cardRanks, (cardRank) => _.isEqual(rank, cardRank))
}

/**
 * @param {Array<Card>} self
 * @param {Array<Card>} other
 * @returns {Boolean}
 */
function checkNonHands(self, other) {
  if (!isUniform(self)) {
    return false
  }

  // assumes card sorted asc
  return _.last(self) >= _.last(other)
}

/**
 * Check if the caller cards is better than field
 *
 * @param {Array<Card>} self
 * @param {Array<Card>} other
 * @returns {Boolean}
 */
function isBetter(self, other) {
  if (self.length !== other.length) {
    return false
  }

  if (self.length < 5) {
    return checkNonHands(self, other)
  }

  const selfHands = checkHands(self)

  if (!selfHands) {
    return false
  }

  const otherHands = checkHands(other)

  if (HANDS_RANKING[selfHands] < HANDS_RANKING[otherHands]) {
    return false
  }

  if (HANDS_RANKING[selfHands] > HANDS_RANKING[otherHands]) {
    return true
  }

  return rulesUtil.tieBreaker[HANDS_RANKING](self, other)
}

/**
 * Check against empty field
 *
 * @param {Array<Card>} cards
 */
function isPlayable(cards) {
  if (!_.includes([1, 2, 3, 5], cards.length)) {
    return false
  }

  if (cards.length !== 5 && !isUniform(cards)) {
    return false
  }

  return Boolean(checkHands(cards))
}
