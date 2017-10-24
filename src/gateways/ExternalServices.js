import R from 'ramda'
import config from './ExternalServices.config'
import ExternalRequest from 'entities/ExternalRequest'
import * as Mock from 'gateways/Mock'

const gateways = { Mock }

const gatewaysByServiceName = R.compose(
  R.reduce(
    (current, [ gateway, services ]) => R.reduce(
      (innerCurrent, service) => R.merge(innerCurrent, { [service]: gateway }),
      current,
      services
    ),
    {}
  ),
  R.toPairs
)(config)

const invoke = (request) => gatewaysByServiceName[request.serviceName].invoke(request)

export { invoke }
