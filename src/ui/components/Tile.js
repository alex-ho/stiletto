// @flow
import React from 'react'
import ButtonBar from 'ui/components/ButtonBar'

const Tile = (props: { text: string, color: string, height: number }) => (

  <div style={{backgroundColor: props.color, height: props.height + 'px', width: props.height + 'px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
    <span>{props.text}</span>
    <ButtonBar styles={{breakBefore: 'always', alignSelf: 'flex-end', justifySelf: 'flex-end'}}>click</ButtonBar>
  </div>
)

export default Tile
