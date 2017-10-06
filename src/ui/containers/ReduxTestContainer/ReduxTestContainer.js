// @flow

import React from 'react'
import { connect } from 'react-redux'

import { incrementCounter } from 'ui/state/counter/actions'
import { selectCounter } from 'ui/state/counter/selectors'

const ReduxTest = (props: { value: number, increment: () => void }) => (
  <div>
    {props.value}
    <button onClick={props.increment}>Increment</button>
  </div>
)

const mapStateToProps = (state): { value: number } => ({
  value: selectCounter(state)
})

const mapDispatchToProps = (dispatch): { increment: () => void } => ({
  increment: () => dispatch(incrementCounter())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxTest)
