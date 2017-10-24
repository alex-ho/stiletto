import * as ExternalServices from 'gateways/ExternalServices'
import Container from 'entities/Container'
import ExternalRequest from 'entities/ExternalRequest'
import R from 'ramda'

const externalRequest = (params)=> new ExternalRequest('ContainerOrchestration', params)

const get = (): Promise<Array<Container>> => ExternalServices.invoke(externalRequest({
  mapper: R.map(Container),
  func: 'GET'
}))

export { get }
