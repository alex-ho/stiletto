import R from 'ramda'

class ExternalRequest {
  constructor(serviceName = '', params: { mapper, func }) {
    const { func, mapper } = params
    this.serviceName = serviceName
    this.func = func
    this.mapper = mapper
    this.params = R.omit(['mapper', 'func'], params)
  }
}

export default ExternalRequest
