// @flow
import React from 'react'
import ButtonBar from 'ui/components/ButtonBar'
import Icon from 'ui/components/Icon'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const Tile = (props: { text: string, color: string, height: number }) => (
  <div style={{
    ... styles.container,
    backgroundColor: props.color,
    height: props.height + 'px',
    width: props.height + 'px'
  }}>
    <div style={{flex: 1, ... styles.container }}>{props.text}</div>
    <ButtonBar style={{
      breakBefore: 'always',
      alignSelf: 'flex-end',
      justifySelf: 'flex-end'
    }}>
      <Icon iconClass="fa-arrow-up" color="green" />
      <Icon iconClass="fa-refresh" color="cyan" />
      <Icon iconClass="fa-arrow-down" color="blue" />
      <Icon iconClass="fa-ellipsis-h" />
    </ButtonBar>
  </div>
)

export default Tile
