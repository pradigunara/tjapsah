import {
  rankByCode,
  suiteByCode,
  codeByRank,
  codeBySuite,
} from 'constant/card'

/**
 * Parse 2-character card code
 *
 * @param {String} cardCode
 */
export const deserialize = (cardCode) => {
  const [suiteCode, rankCode] = cardCode

  return {
    suite: suiteByCode[suiteCode],
    rank: rankByCode[rankCode],
  }
}

/**
 * Stringify card object to card code
 *
 * @param {Object} cardObject
 * @param {String} cardObject.suite
 * @param {String} cardObject.rank
 */
export const serialize = (cardObject) => {
  return codeBySuite[cardObject.suite] + codeByRank[cardObject.rank]
}

export default {
  serialize,
  deserialize,
}
