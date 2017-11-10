// @flow
import React from 'react'

const styles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '5px 10px 5px 10px'
}

const ButtonBar = (props: { text: string, color: string, style: object}) => (
  <div style={{
    ... styles,
    backgroundColor: props.color,
    ... props.style,
  }}>
    {props.children}
  </div>
)

export default ButtonBar
