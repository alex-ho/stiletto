// @flow

class Container {
  name: string
  configurationId: string
  status: string

  constructor(name: string = '', configurationId: string = '', status: string = '') {
    this.name = name
    this.configurationId = configurationId
    this.status = status
  }
}

export default Container
