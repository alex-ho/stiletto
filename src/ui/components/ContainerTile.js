import React from 'react'
import Container from 'entities/Container'
import Tile from 'ui/components/Tile'
import ButtonBar from 'ui/components/ButtonBar'
import Icon from 'ui/components/Icon'

const styles = {
  containerTitle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonBar: {
    breakBefore: 'always',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end'
  }
}

const ContainerTile = (container: Container) => (
  <Tile color={'red'} height={200}>
    <div style={{flex: 1, ... styles.containerTitle }}>Confluent-Kafka with a longer name</div>
    <ButtonBar style={styles.buttonBar}>
      <Icon iconClass="fa-arrow-up" color="green" />
      <Icon iconClass="fa-refresh" color="cyan" />
      <Icon iconClass="fa-arrow-down" color="blue" />
      <Icon iconClass="fa-ellipsis-h" />
    </ButtonBar>
  </Tile>
)

export default ContainerTile
