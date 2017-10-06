// @flow
import { INCREMENT_COUNTER } from './actions'

const counterReducer = (counter: number = 0, action: { type: string }): number => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return counter + 1
    default:
      return counter
  }
}

export default counterReducer
