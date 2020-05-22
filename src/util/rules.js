import { HANDS } from 'src/constant/hands'

// return HANDS for successful match
const handsChecker = {
  [HANDS.TWO_PAIR](cards) {},
  [HANDS.STRAIGHT](cards) {},
  [HANDS.FLUSH](cards) {},
  [HANDS.FULL_HOUSE](cards) {},
  [HANDS.FOUR_OF_A_KIND](cards) {},
  [HANDS.STRAIGHT_FLUSH](cards) {},
}

const tieBreaker = {
  [HANDS.TWO_PAIR](self, other) {},
  [HANDS.STRAIGHT](self, other) {},
  [HANDS.FLUSH](self, other) {},
  [HANDS.FULL_HOUSE](self, other) {},
  [HANDS.FOUR_OF_A_KIND](self, other) {},
  [HANDS.STRAIGHT_FLUSH](self, other) {},
}

export default {
  handsChecker,
  tieBreaker,
}
