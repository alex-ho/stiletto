import * as ExternalServices from 'gateways/ExternalServices'
import Container from 'entities/Container'
import ExternalRequest from 'entities/ExternalRequest'
import R from 'ramda'

const externalRequest = (params)=> new ExternalRequest('ContainerOrchestration', params)

const get = (id) => ExternalServices.invoke(externalRequest({
  mapper: R.map(Container),
  func: 'GET',
  id
}))

const start = (configuration) => ExternalServices.invoke(externalRequest({
  mapper: Container,
  func: 'START',
  configuration
}))

const stop = (container) => ExternalServices.invoke(externalRequest({
  func: 'STOP',
  container
}))

export {
  get,
  start,
  stop
}
