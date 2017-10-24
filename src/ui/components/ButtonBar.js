// @flow
import React from 'react'

const ButtonBar = (props: { text: string, color: string, styles: object}) => (

  <div style={{...props.styles, backgroundColor: props.color, display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
    {props.children}
  </div>
)

export default ButtonBar
