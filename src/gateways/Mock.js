import ExternalRequest from 'entities/ExternalRequest'

const invoke = (request) => Promise.resolve(new request.mapper())

export { invoke }
