// @flow

import Container from 'entities/Container'

const get = (): Promise<Array<Container>> => Promise.resolve([new Container('directory-api-users-micro')])

export { get }
