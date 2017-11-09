// @flow
import React from 'react'

const styles = {
  fontSize: 24,
  color: 'black'
}

const Icon = (props: { iconClass: string, color: string }) => (
  <span className={'fa ' + props.iconClass} style={{
    ... styles,
    color: props.color
  }}></span>
)

export default Icon
