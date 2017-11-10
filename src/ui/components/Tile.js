// @flow
import React from 'react'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const Tile = (props: { color: string, height: number }) => (
  <div style={{
    ... styles.container,
    backgroundColor: props.color,
    height: props.height + 'px',
    width: props.height + 'px'
  }}>
    {props.children}
  </div>
)

export default Tile
